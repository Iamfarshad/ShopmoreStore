import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Body from "../Components/Body";
import Footer from "../Components/Footer";

const Dashboard = () => {
  return (
    <section className="w-full h-screen flex flex-col">
      
      <div className="w-full h-20">
        <Header />
      </div>

     
      <div className="flex flex-grow">
       
        <div className="w-1/12 h-full bg-lime-500/90 rounded-r-lg border-r">
          <Sidebar />
        </div>

        
        <div className="w-11/12 h-screen bg-white">
          <Body />
        </div>
      </div>

      <div className="w-full h-12 ">
        <Footer />
      </div>
    </section>
  );
};

export default Dashboard;
