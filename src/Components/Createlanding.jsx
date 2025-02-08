import car from "../assets/car.jpeg";
import { APP_NAME } from "../Constants/GlobalConstants";
import { Link } from "react-router-dom";

const createlanding = () => {



  return (
    <section className="w-full h-screen bg-gray-50">
      <div className="w-full h-52 flex justify-between p-2">
        <div className="">
          <span className="text-lime-500 font-roboto text-5xl font-bold animate-slideInFromLeft">
            {APP_NAME}
          </span>
        </div>
        <div className="w-80 h-full rounded-full bg-lime-500 animate-slideInFromLeft">
          <img className="w-full h-full rounded-full p-3" src={car} alt="" />
        </div>
      </div>

      <div className="w-full h-4/6 flex justify-center items-center mt-1">
        <div className="w-3/6 h-auto bg-lime-500 rounded-lg p-1 ">
          <form 
            className="w-full h-full bg-gray-50 rounded-lg p-1"
           
          >
            <div className="w-full h-10 text-lime-500 flex justify-center items-center">
              <span className="text-3xl font-roboto">Create An Account</span>
            </div>

            <div className="w-full h-auto flex justify-center flex-col gap-2">
              <div className="w-full h-full flex-col flex ">
                <label htmlFor="username" className="w-full p-1 text-lg">
                  Email:
                </label>
                <input
                  className="w-full h-10 border-2 rounded-full p-2 border-lime-300 focus:ring-lime-500 focus:border-lime-500"
                  placeholder="Enter Email"
                  type="email"
                 
                  
                  required
                />
              </div>

              
              <div className="w-full h-full flex justify-between gap-2">
                <div className="w-1/2 h-full flex flex-col">
                <label htmlFor="Firstname" className="w-full p-1 text-lg">
                  Firstname:
                </label>
                <input
                  className="w-full h-10 border-2 rounded-full p-2 border-lime-300 focus:ring-lime-500 focus:border-lime-500"
                  placeholder="Enter Firstname"
                  type="text"
                  required
                />
              
                </div>
                <div className="w-1/2 h-full flex flex-col">
                <label htmlFor="Middlename" className="w-full p-1 text-lg">
                  Middlename:
                </label>
                <input
                  className="w-full h-10 border-2 rounded-full p-2 border-lime-300 focus:ring-lime-500 focus:border-lime-500"
                  placeholder="Enter Middlename"
                  type="text"
                  
                />
                </div>
              </div>

              <div className="w-full h-full flex justify-between gap-2">
                <div className="w-1/2 h-full flex flex-col">
                <label htmlFor="Lastname" className="w-full p-1 text-lg">
                  Lastname:
                </label>
                <input
                  className="w-full h-10 border-2 rounded-full p-2 border-lime-300 focus:ring-lime-500 focus:border-lime-500"
                  placeholder="Enter Lastname"
                  type="text"
                  required
                />
              
                </div>
                <div className="w-1/2 h-full flex flex-col">
                <label htmlFor="Mobilenumber" className="w-full p-1 text-lg">
                  Mobilenumber:
                </label>
                <input
                  className="w-full h-10 border-2 rounded-full p-2 border-lime-300 focus:ring-lime-500 focus:border-lime-500"
                  placeholder="0000-000-000"
                  type="number"
                  required
                />
                </div>
              </div>

              <div className="w-full h-full flex-col flex">
                <label htmlFor="Create username" className="w-full p-1 text-lg">
                  Enter Address:
                </label>
                <input
                  className="w-full h-10 border-2 rounded-full p-2 border-lime-300 focus:ring-lime-500 focus:border-lime-500"
                  placeholder="Enter Address"
                  type="text"
                  
                 
                  required
                />
              </div>

              <div className="w-full h-full flex justify-between ">
                
                <div className="w-1/2 h-full flex flex-col">
                <label htmlFor="Pincode" className="w-full p-1 text-lg">
                  Pincode:
                </label>
                <input
                  className="w-full h-10 border-2 rounded-full p-2 border-lime-300 focus:ring-lime-500 focus:border-lime-500"
                  placeholder="000000"
                  type="number"
                  required
                />
                </div>


                <div className="w-full flex justify-end items-center mt-4">
              <button className="px-3 py-2 rounded-full text-lg bg-lime-500 transition ease-in duration-300 transform hover:bg-black hover:text-white hover:shadow-lg hover:scale-105">
               <Link to="/dashboard">
                Create Account</Link> 
              </button>
            </div>

              </div>

            </div>

           

            <div className="w-full flex justify-center items-center mt-4">
              
            </div>

            
          </form>
        </div>
      </div>
    </section>
  )
}

export default createlanding