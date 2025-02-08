import { FaLocationDot } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { APP_NAME } from "../Constants/GlobalConstants";
import { useSelector } from "react-redux";
import { FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <section className="w-full h-20 bg-gray-50 text-white sticky top-0">
      <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-4 p-2">
        <div className="h-full w-auto flex justify-center items-center">
          <span className="text-lime-500 font-roboto text-2xl md:text-3xl font-bold">
            {APP_NAME}
          </span>
        </div>

        <div className="w-auto h-full flex justify-center items-center flex-col">
          <span className="text-black text-sm md:text-base">
            Delivering to Bengaluru 562114
          </span>
          <div className="flex gap-1 items-center">
            <span className="font-bold text-black text-sm md:text-base">
              Update Location
            </span>
            <span className="text-lime-500">
              <FaLocationDot />
            </span>
          </div>
        </div>

        <div className="w-auto flex justify-center items-center">
          <div className="w-auto h-auto">
            <button className="border px-2 md:px-4 py-2 md:py-3 rounded-l-lg bg-black text-lime-500">
              <FaMicrophone />
            </button>
          </div>

          <div className="w-auto h-auto">
            <input
              placeholder="Search GrocerymoreStore"
              className="p-2 w-64 md:w-96 py-2 bg-gray-200 text-black placeholder:text-lime-800"
              type="text"
            />
          </div>

          <div className="w-auto h-auto">
            <button className="border px-3 md:px-5 py-2 md:py-3 rounded-r-lg text-white bg-lime-500 hover:bg-lime-400">
              <FaSearch />
            </button>
          </div>
        </div>

        <div className="w-auto h-full flex justify-center items-center flex-col">
          <span className="text-black text-sm md:text-base">
            Hello, sign in
          </span>
          <div className="flex gap-1 items-center">
            <span className="font-bold text-black text-sm md:text-base">
              Accounts & Lists
            </span>
            <span className="text-lime-500">
              <FaAngleDown />
            </span>
          </div>
        </div>

        <div className="w-auto h-full flex justify-center items-center flex-col">
          <span className="text-black text-sm md:text-base">Returns</span>
          <div className="flex gap-1 items-center">
            <p className="font-bold text-black text-sm md:text-base">
              <span className="text-lime-500 font-bold text-md">&</span> Orders
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <span className="text-lime-500 text-2xl md:text-4xl">
            <MdAddShoppingCart />
          </span>
          <span className="bg-black text-lime-500 px-2 rounded-full">
            {count}
          </span>
        </div>

        <div className="flex justify-center items-center">
          <button className="bg-black text-lime-500 px-2 md:px-3 py-2 md:py-3 rounded-lg hover:bg-lime-500 hover:text-white">
            <Link to="/login">
              <FaPowerOff />
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
