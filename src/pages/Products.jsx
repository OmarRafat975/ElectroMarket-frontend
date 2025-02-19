import ProductCard from '../components/Product/ProductCard';
import PageTitle from '../components/Header/PageTitle';
import Filter from '../components/Products/Filter';
import Sort from '../components/Products/Sort';
import Search from '../components/Navbar/Search';

import { ShopContext } from '../context/ctxInit.js';
import { useContext, useEffect, useState } from 'react';
import { useFilter } from '../hooks/useFilter.js';
import PaginationLinks from '../components/Products/PaginationLinks.jsx';
const url = import.meta.env.VITE_BACKEND_URL;
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading/Loading.jsx';

export default function Products() {
  const { pageNum } = useParams();

  const pageNumber = pageNum || 1;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false);
  const [page, setPage] = useState(pageNumber);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(url + `/products?page=${page}`);

        const { products: data, pages: totalPages } = await response.json();

        setPages(totalPages);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError('Something went wrong');
        return error.message;
      }
    };
    fetchProducts();
  }, [page]);

  const { search, showSearch } = useContext(ShopContext);
  const {
    filterProducts,
    sortType,
    toggleCategory,
    setFilterProducts,
    setSortType,
  } = useFilter(products, search, showSearch);

  return (
    <>
      <Search />
      <main className=" sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 px-4 border-t mb-4">
          <Filter
            toggleCategory={toggleCategory}
            filterProducts={filterProducts}
            setFilterProducts={setFilterProducts}
          />
          {/* right side */}
          <div className="flex-1">
            <div className="flex justify-between text-base sm:text-2xl mb-4 gap-4">
              <PageTitle title="PRODUCTS" />
              <Sort sortType={sortType} setSortType={setSortType} />
            </div>
            {loading && <Loading />}
            <div className="products grid gap-2 mb-8 m-h-[100vh] w-full">
              {!loading &&
                filterProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <PaginationLinks page={page} pages={pages} changePage={setPage} />
          </div>
        </div>
      </main>
    </>
  );
}
