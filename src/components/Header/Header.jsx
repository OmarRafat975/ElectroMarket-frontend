import backgroundImage from '../../assets/bgImage.jpg';

export default function Header() {
  return (
    <header className="w-full relative">
      <div className="relative overflow-hidden">
        <img
          src={backgroundImage}
          alt="restarunt kitchen"
          className=" w-full right-0 min-h-[30rem] md:h-[25rem] "
        />
        <hr className="absolute w-full bg-[#00000096] h-full top-0" />
      </div>

      <div className="absolute bg-[#e3f2fdd8]  w-full xl:w-1/2 h-full md:h-2/3 top-[50%] translate-y-[-50%] border-2 rounded border-blue-300 p-5 overflow-hidden">
        <h1 className="font-bold text-gray-700 text-3xl sm:text-5xl relative w-fit leading-relaxed">
          <hr className="absolute top-0 w-16 h-1 border-none rounded-xl bg-gray-700" />
          Electro Market
          <hr className="absolute right-0 w-1 h-1 left-[48%] translate-x-[-50%] border-none rounded-full bg-gray-700" />
          <hr className="absolute right-0 w-1 h-1 left-[50%] translate-x-[-50%] border-none rounded-full bg-gray-700" />
          <hr className="absolute right-0 w-1 h-1 left-[52%] translate-x-[-50%] border-none rounded-full bg-gray-700" />
          <hr className="absolute right-0 w-16 h-1 border-none rounded-xl bg-gray-700" />
        </h1>
        <p className="mt-4 leading-9 text-gray-700 p-5 w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora
          odit amet beatae quasi molestiae, temporibus quaerat debitis, cumque
          nulla nemo, aperiam sequi inventore voluptas corporis officia natus
          iure doloremque.
        </p>
      </div>
    </header>
  );
}
