import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { crossIcon, searchIcon } from '../../assets/icons';

export default function Search() {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  return (
    showSearch && (
      <div className=" border-y bg-[#52a5e01e] text-center flex items-center justify-center">
        <div className="inline-flex items-center justify-center border border-[#8cd0fd8a] px-5 py-2 my-5 mx-3 rounded w-3/4 sm:w-1/2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 outline-none bg-inherit text-sm "
            type="text"
            name=""
            id=""
            placeholder="Search"
          />
          <div className="w-4 transition-colors hover:text-blue-500">
            {searchIcon}
          </div>
        </div>
        <div
          onClick={() => setShowSearch(false)}
          className="inline cursor-pointer border-2 border-[#8cd0fd8a] transition-colors hover:text-red-400 p-1 rounded-xl"
        >
          {crossIcon}
        </div>
      </div>
    )
  );
}
