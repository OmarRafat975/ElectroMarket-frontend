/* eslint-disable react/prop-types */
export default function PageTitle({ title }) {
  return (
    <h1 className="font-bold text-black  relative w-fit leading-relaxed">
      <hr className="absolute right-0 w-1 h-1 left-[50%] translate-x-[-50%] border-none rounded-full bg-gray-700" />
      <hr className="absolute right-0 w-1 h-1 left-[47%] translate-x-[-50%] border-none rounded-full bg-gray-700" />
      <hr className="absolute right-0 w-1 h-1 left-[54%] translate-x-[-50%] border-none rounded-full bg-gray-700" />
      <hr className="absolute top-0 w-16 h-1 border-none rounded-xl bg-gray-700" />
      {title}
      <hr className="absolute right-0 w-1 h-1 left-[50%] translate-x-[-50%] border-none rounded-full bg-gray-700" />
      <hr className="absolute right-0 w-1 h-1 left-[47%] translate-x-[-50%] border-none rounded-full bg-gray-700" />
      <hr className="absolute right-0 w-1 h-1 left-[54%] translate-x-[-50%] border-none rounded-full bg-gray-700" />
      <hr className="absolute right-0 w-16 h-1 border-none rounded-xl bg-gray-700" />
    </h1>
  );
}
