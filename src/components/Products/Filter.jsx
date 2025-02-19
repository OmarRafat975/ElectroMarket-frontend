/* eslint-disable react/prop-types */
import axios from '../../api/axios';
import { dropDownIcon } from '../../assets/icons';
import { useEffect, useState } from 'react';

export default function Filter({ toggleCategory }) {
  const [showFilter, setShowFilter] = useState(false);
  const [categories, setCategories] = useState([]);

  function toggleFilter() {
    setShowFilter((prevE) => !prevE);
  }

  async function getCategories() {
    try {
      const response = await axios.get('/category');
      if (response.data.status === 'success') {
        setCategories(response.data.data);
      } else {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="min-w-60">
      <p
        onClick={toggleFilter}
        className="my-2 text-xl flex items-center cursor-pointer gap-2"
      >
        FILTERS
        <span
          className={`h-3 sm:hidden ${
            showFilter ? 'rotate-90' : ''
          } transition-all`}
        >
          {dropDownIcon}
        </span>
      </p>
      {/* Category */}
      <div
        className={`border border-[#8cd0fd8a] pl-5 py-3 my-6 ${
          showFilter ? '' : 'hidden'
        } sm:block`}
      >
        <p className="mb-3 text-sm font-medium">CATEGORIES</p>
        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
          {categories.length > 0 &&
            categories.map((category) => (
              <p className="flex gap-2" key={category._id}>
                <input
                  type="checkbox"
                  name={category.name}
                  id={category.name}
                  className="w-3"
                  value={category.name}
                  onChange={toggleCategory}
                />
                {category.name}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}
