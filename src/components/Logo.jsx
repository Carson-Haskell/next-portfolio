import Link from "next/link";

const Logo = () => {
  return (
    <div className=" lg:justify-center lg:w-1/3 md:hidden lg:flex">
      <Link
        href="/"
        className="flex items-center justify-center p-1 text-sm font-semibold bg-black rounded-md"
      >
        <span className="mr-1 text-white">Carson</span>
        <span className="flex items-center justify-center h-8 text-black bg-white rounded w-14">
          Haskell
        </span>
      </Link>
    </div>
  );
};

export default Logo;
