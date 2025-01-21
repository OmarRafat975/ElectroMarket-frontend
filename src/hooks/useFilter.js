import { useCallback, useEffect, useState } from 'react';

export function useFilter(products, search, showSearch) {
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  function toggleCategory(e) {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  }

  const applyFilterAndSort = useCallback(function applyFilterAndSort(
    products,
    category,
    sortType,
    search,
    showSearch
  ) {
    let productsCopy = structuredClone(products);

    if (category.length > 0) {
      productsCopy = productsCopy.filter((product) =>
        category.includes(product.category.name)
      );
    }

    switch (sortType) {
      case 'low-high':
        productsCopy.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        productsCopy.sort((a, b) => b.price - a.price);
        break;
      default:
        // No sorting (default order)
        break;
    }

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilterProducts(productsCopy);
  },
  []);

  useEffect(() => {
    applyFilterAndSort(products, category, sortType, search, showSearch);
  }, [products, category, applyFilterAndSort, sortType, search, showSearch]);

  return {
    filterProducts,
    sortType,
    toggleCategory,
    setFilterProducts,
    setSortType,
  };
}
