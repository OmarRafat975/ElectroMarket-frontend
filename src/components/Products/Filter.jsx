/* eslint-disable react/prop-types */
import { dropDownIcon } from '../../assets/icons';
import { useState } from 'react';

export default function Filter({ toggleCategory }) {
  const [showFilter, setShowFilter] = useState(false);

  function toggleFilter() {
    setShowFilter((prevE) => !prevE);
  }

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
          <p className="flex gap-2">
            <input
              type="checkbox"
              name="category-new"
              id="category"
              className="w-3"
              value={'New'}
              onChange={toggleCategory}
            />
            New
          </p>
          <p className="flex gap-2">
            <input
              type="checkbox"
              name="category-old"
              id="category"
              className="w-3"
              value={'Old'}
              onChange={toggleCategory}
            />
            Old
          </p>
          <p className="flex gap-2">
            <input
              type="checkbox"
              name="category-old"
              id="category"
              className="w-3"
              value={'stove'}
              onChange={toggleCategory}
            />
            stove
          </p>
        </div>
      </div>
    </div>
  );
}
