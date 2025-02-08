import { useState, useEffect } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../Store/Slice";

const Cards = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section className="flex flex-wrap gap-4 justify-center p-4">
  {products.map((product) => (
    <div
      key={product.id}
      className="w-[calc(20%-1rem)] h-80 rounded-lg shadow-lg bg-gray-50 flex flex-col lappy:w-[calc(25%-1rem)] tab:w-[calc(33.33%-1rem)] phone:w-[calc(50%-1rem)] iphone:w-full"
    >
  
      <div className="w-full h-1/2 bg-lime-500 p-1 rounded-lg">
        <img
          className="w-full h-full rounded-lg object-cover"
          src={product.image}
          alt={product.title}
        />
      </div>


      <div className="w-full h-1/2 p-2 flex flex-col justify-between">
      
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold lappy:text-xs tab:text-sm phone:text-xs">
            {product.title}
          </span>
          <span className="flex items-center text-lime-500 font-bold lappy:text-xs tab:text-sm">
            <LiaRupeeSignSolid />
            {product.price}
          </span>
        </div>

    
        <div className="flex items-center justify-between mt-2">
  
          <button
            onClick={() => dispatch(increment())}
            className="px-4 bg-lime-500 py-1 rounded-full transition duration-200 hover:bg-black hover:text-white hover:shadow-lg hover:scale-105 lappy:px-3 lappy:py-1 tab:px-2 tab:py-1 phone:px-2 phone:py-1"
          >
            <FaPlus />
          </button>


          <button
            onClick={() => dispatch(decrement())}
            className="px-4 bg-lime-500 py-1 rounded-full transition duration-200 hover:bg-black hover:text-white hover:shadow-lg hover:scale-105 lappy:px-3 lappy:py-1 tab:px-2 tab:py-1 phone:px-2 phone:py-1"
          >
            <FaMinus />
          </button>
        </div>
      </div>
    </div>
  ))}
</section>

  );
};

export default Cards;
