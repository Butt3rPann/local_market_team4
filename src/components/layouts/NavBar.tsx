import { IoSearchSharp } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex items-center h-fit bg-[#F6AB4F] justify-between pl-12 pr-12 gap-5 w-screen sticky top-0 z-50 h-15">
      <div className="flex items-center">
        <Link to="/">
          <img
            src="https://s3-alpha-sig.figma.com/img/aab5/cc4c/310d177cff4becbe14735722aa599250?Expires=1702857600&Signature=a2RP~adEkJkY4wCtHQaFmo2arDJ2aIt2rEfBHzqE807~b78BRKZ0JeJM~Cc1gweVOj0v0dpBps0gmZWvhy7d6RI6Wc6m93Iw~V7Vvos7XzKJZKyfipgSK09k1zpyMzksifV-wJ-koq7dXuxete8Y6qen1gKzJvGNpscLT8pGT2I9FKP9uYOdqy~Cp1T1MpXLFDya-~swE0aNQqSS-TYRmWaRMW7eo~7jM5ATe~CbkPHlis8ozLy9zD2CPIuolcDpWjTrfyGYWoLbGaS4cCIFaHVSRju0hJaf6lPZ-vkbzEQV0ivEDmE4O93S8Y9R6r4enqO5LsRq6flKso01IdPEzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="logo"
            className="w-[6rem] pb-6"
          />
        </Link>
        <Link to="/Product">
          <h1 className="ml-4 text-[#FFF3E5] font-concertOne text-[25px]">
            Products
          </h1>
        </Link>
      </div>

      <div className="min-w-[40%] flex items-center justify-between gap-5 p-3 rounded-xl bg-[#FFF3E5]">
        <div className="flex items-center rounded sm:ml-2 h-9">
          <input
            type="text"
            className="px-2 py-2 sm:min-w-[16rem] bg-[#FFF3E5] onfocus:bg-primary-200 focus:outline-none placeholder-[#00000066] placeholder:font-concertOne"
            placeholder="Search in Market Place"
          />
        </div>
        <button className="pr-2">
          <IoSearchSharp size={25} color={"#F6AB4F"} />
        </button>
      </div>
      <div className="flex justify-end items-center gap-4">
        <Link to="/Favorite">
          <IoMdHeartEmpty size={35} color={"#FFF3E5"} />
        </Link>
        <FiShoppingBag size={30} color={"#FFF3E5"} />
        <MdAccountCircle size={40} color={"#FFF3E5"} />
      </div>
    </div>
  );
};

export default NavBar;
