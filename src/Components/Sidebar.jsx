import { LuVegan } from "react-icons/lu";
import { GiFruitBowl } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { FaSortAlphaDownAlt } from "react-icons/fa";
import { GiMeatHook } from "react-icons/gi";
import { RiBookShelfLine } from "react-icons/ri";
import { LuMilk } from "react-icons/lu";
import { MdPersonalInjury } from "react-icons/md";
import { SiAnkermake } from "react-icons/si";

// import { useSelector } from 'react-redux';


const Sidebar = () => {

  // const count = useSelector((state) => state.counter.value);

  return (
    <section className="w-full h-full">
  <div className="w-full h-auto flex justify-center p-2">
    <span className="text-lg text-white font-bold">Products</span>
  </div>
  
  <div className="w-full gap-4 h-auto flex flex-col justify-center p-2">
    <div className="w-full flex items-center gap-2 cursor-pointer hover:text-black text-white text-lg desk:text-base tab:text-sm phone:text-xs">
      <span>Vegita</span>
      <span><LuVegan /></span>
    </div>

    <div className="w-full flex items-center gap-2 cursor-pointer hover:text-black text-white text-lg desk:text-base tab:text-sm phone:text-xs">
      <span>Fruite</span>
      <span><GiFruitBowl /></span>
    </div>

    <div className="w-full flex items-center gap-2 cursor-pointer hover:text-black text-white text-lg desk:text-base tab:text-sm phone:text-xs">
      <span>Meat</span>
      <span><TbMeat /></span>
    </div>

    <div className="w-full flex items-center gap-2 cursor-pointer hover:text-black text-white text-lg desk:text-base tab:text-sm phone:text-xs">
      <span>Dictionary</span>
      <span><FaSortAlphaDownAlt /></span>
    </div>

    <div className="w-full flex items-center gap-2 cursor-pointer hover:text-black text-white text-lg desk:text-base tab:text-sm phone:text-xs">
      <span>SeaFood</span>
      <span><GiMeatHook /></span>
    </div>

    <div className="w-full flex items-center gap-2 cursor-pointer hover:text-black text-white text-lg desk:text-base tab:text-sm phone:text-xs">
      <span>Stationary</span>
      <span><RiBookShelfLine /></span>
    </div>

    <div className="w-full flex items-center gap-2 cursor-pointer hover:text-black text-white text-lg desk:text-base tab:text-sm phone:text-xs">
      <span>DairyPro</span>
      <span><LuMilk /></span>
    </div>

    <div className="w-full flex items-center gap-2 cursor-pointer hover:text-black text-white text-lg desk:text-base tab:text-sm phone:text-xs">
      <span>Personal</span>
      <span><MdPersonalInjury /></span>
    </div>

    <div className="w-full flex items-center gap-2 cursor-pointer hover:text-black text-white text-lg desk:text-base tab:text-sm phone:text-xs">
      <span>Makeup</span>
      <span><SiAnkermake /></span>
    </div>
  </div>
</section>

  );
};

export default Sidebar;
