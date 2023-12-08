import { IoIosSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex items-center h-fit bg-[#F6AB4F] justify-between pt-6 pb-6 pl-12 pr-12 items-center gap-5 w-screen sticky top-0 z-50 h-15">
      <div className="flex items-center">
        <Link to="/"><h1 className="text-orange font-bold">LOGO</h1></Link>
        <Link to="/Product"><h1 className="ml-4">Products</h1></Link>
      </div>

      <div className="min-w-[40%] flex items-center justify-between gap-5 p-3 rounded-full bg-[#FFF3E5]">
        <div className="flex items-center rounded sm:ml-2 h-9">
          <input
            type="text"
            className="px-2 py-2 sm:min-w-[16rem] bg-[#FFF3E5] onfocus:bg-primary-200 focus:outline-none placeholder-gray-500"
            placeholder="Search in Market Place"
          />
        </div>
        <button className="pr-2">
          <IoIosSearch size={25}/>
        </button>
      </div>
      <div className="flex justify-end items-center gap-4">
        <Link to="/Favorite"><IoMdHeartEmpty size={35} color={"black"} /></Link>
        <FiShoppingBag size={30} color={"black"} />
        <MdAccountCircle size={40} color={"black"} />
      </div>
    </div>
  );
};


export default NavBar;
