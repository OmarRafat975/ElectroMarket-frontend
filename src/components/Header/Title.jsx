/* eslint-disable react/prop-types */
export default function Title({ children, className }) {
  return (
    <h2
      className={
        'font-bold text-black  relative w-fit leading-relaxed my-4 hover:text-blue-600 transition-colors group ' +
        className
      }
    >
      <hr className="absolute right-0 w-1 h-1 left-[50%] translate-x-[-50%] border-none rounded-full bg-gray-700 group-hover:bg-blue-600 transition-colors" />
      <hr className="absolute right-0 w-1 h-1 left-[47%] translate-x-[-50%] border-none rounded-full bg-gray-700 group-hover:bg-blue-600 transition-colors" />
      <hr className="absolute right-0 w-1 h-1 left-[54%] translate-x-[-50%] border-none rounded-full bg-gray-700 group-hover:bg-blue-600 transition-colors" />
      <hr className="absolute top-0 w-16 h-1 border-none rounded-xl bg-gray-700 group-hover:bg-blue-600 transition-colors" />
      {children}
      <hr className="absolute right-0 w-1 h-1 left-[50%] translate-x-[-50%] border-none rounded-full bg-gray-700 group-hover:bg-blue-600 transition-colors" />
      <hr className="absolute right-0 w-1 h-1 left-[47%] translate-x-[-50%] border-none rounded-full bg-gray-700 group-hover:bg-blue-600 transition-colors" />
      <hr className="absolute right-0 w-1 h-1 left-[54%] translate-x-[-50%] border-none rounded-full bg-gray-700 group-hover:bg-blue-600 transition-colors" />
      <hr className="absolute right-0 w-16 h-1 border-none rounded-xl bg-gray-700 group-hover:bg-blue-600 transition-colors" />
    </h2>
  );
}
