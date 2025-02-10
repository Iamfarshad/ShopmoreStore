import { Link } from "react-router-dom";

const Snacklogin = () => {

  return (
    <section className="w-full h-20 bg-lime-500">
      <div className="w-full h-full justify-between flex items-center">
        <div className=" p-2 text-justify">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            aliquid excepturi eos deleniti, unde reiciendis illo commodi facilis
            aut magnam esse pariatur molestiae dolor eveniet illo commodi
            facilis aut magnam esse pariatur molestiae dolor eveniet illo
            commodi facilis aut magnam esse pariatur molestiae dolor eveniet
            illo commodi facilis aut magnam{" "}
          </span>
        </div>

        <div className="p-2">
      <button  className="px-3 py-3 bg-white rounded-full transition ease-in duration-300 transform hover:bg-black hover:text-white hover:shadow-lg hover:scale-105">
        <Link className="cursor-pointer" to="login">Login</Link>
      </button>
    </div>
      </div>
    </section>
  );
};

export default Snacklogin;
