import { data } from "../lib/data";
import { MdOutlineStar } from "react-icons/md";
import { IoHeartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import ProductCard from "../layouts/ProductCard";

function Bestseller() {
  const bestSellerProducts = (limit = 5) => {
    return data.sort((a, b) => b.saleAmount - a.saleAmount).slice(0, limit);
  };
  return (
    <div className="w-full bg-[#F7C4AD] pt-[1em] pb-[2em]">
      <h1 className="tracking-[.3em] font-extrabold text-[55px] mt-5 text-white text-center drop-shadow-lg font-lilitaOne">
        BEST SELLING
      </h1>
      <div className="flex items-center justify-center my-8">
        <div className="mx-10 grid grid-cols-5">
          {bestSellerProducts().map((product, index) => (
            <ProductCard {...product} numberIndex={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bestseller;
