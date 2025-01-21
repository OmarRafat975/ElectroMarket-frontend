/* eslint-disable react/prop-types */

export default function Sort({ sortType, setSortType }) {
  return (
    <select
      value={sortType}
      onChange={(e) => setSortType(e.target.value)}
      className="border-2 border-[#8cd0fd8a] text-sm px-2 bg-transparent"
    >
      <option value="relavent">Sort by: Relavent</option>
      <option value="low-high">Sort by: Low to Hight</option>
      <option value="high-low">Sort by: High to Low</option>
    </select>
  );
}
