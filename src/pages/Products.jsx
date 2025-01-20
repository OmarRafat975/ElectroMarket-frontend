import ProductCard from '../components/Product/ProductCard';
import PageTitle from '../components/Header/PageTitle';
import Filter from '../components/Products/Filter';
import Sort from '../components/Products/Sort';
import Search from '../components/Navbar/Search';

import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';
import { useFilter } from '../hooks/useFilter.js';

export default function Products() {
  const { products, search, showSearch } = useContext(ShopContext);
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
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 px-4 border-t">
          <Filter
            toggleCategory={toggleCategory}
            filterProducts={filterProducts}
            setFilterProducts={setFilterProducts}
          />
          {/* right side */}
          <div className="flex-1">
            <div className="flex justify-between text-base sm:text-2xl mb-4">
              <PageTitle title="Products" />
              <Sort sortType={sortType} setSortType={setSortType} />
            </div>
            <div className="products grid gap-2 mb-8 s">
              {filterProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
