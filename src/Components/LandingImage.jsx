import store from "../assets/store.jpeg";
import { FaAngleDoubleDown } from "react-icons/fa";
import { APP_NAME } from "../Constants/GlobalConstants";


const LandingImage = () => {


    const scrollDown = () => {
        window.scrollTo({
            // it scrolls down by viewport height
          top: window.innerHeight, 
          behavior: 'smooth', 
        });
    };  

  return (
    <section className="w-full h-full">
        {/* image section in absolute */}
        <div className="w-full h-full absolute">
        <img src={store} alt="Store front" className="w-full h-full object-cover brightness-50" />
        </div>

        <div className="relative w-full">
        <span className="text-lime-500 font-roboto text-5xl font-bold"> {APP_NAME} </span>
        </div>

        {/* now text section in relative */}

        <div className="relative h-full w-full flex justify-center items-center flex-col ">
            <div className="w-full h-auto  text-white flex justify-start  p-4">
                {/* text section  */}
               <p className="font-poppins text-5xl animate-slideInFromLeft">Welcome to <span className="text-lime-500 font-roboto font-bold"> {APP_NAME} </span> </p>
            </div>

            <div className="w-full h-auto text-white flex justify-center">
            <h5 className="font-poppins text-4xl animate-slideInFromLeftt">Fresh, Fast, and Always in Stock.</h5>
            </div>

         <div className="w-full h-auto text-white flex justify-center ">
            <span className="font-poppins text-2xl mt-4 animate-disappear">
                Please click the button in bottom of the page to go to login window
            </span>
         </div>

         {/* bouncing button */}

         <div className="w-full h-auto text-white flex justify-center p-5">
              
              <button onClick={scrollDown} className="w-16 h-16 flex justify-center items-center bg-white text-black rounded-full animate-bounce hover:bg-lime-500 hover:text-white">
              <FaAngleDoubleDown className="size-6" />

              </button>

         </div>

        </div>
        
    </section>    
  );
};

export default LandingImage;
