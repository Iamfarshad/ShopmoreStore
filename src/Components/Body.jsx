
import Cards from "../Components/Cards";

const Body = () => {
  return (
    <section className="h-full w-full p-4">
      
      <div className="flex flex-wrap gap-4 overflow-y-scroll h-full">
        <Cards />
        
      </div>
    </section>
  );
};



export default Body;
