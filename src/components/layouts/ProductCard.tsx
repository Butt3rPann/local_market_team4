import { IoHeartSharp } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAddContext } from "../context/appContext.jsx";

export interface ProductCardProps {
  id: number;
  img: string[];
  saleAmount: number;
  productName: string;
  rate: number;
  numRate: number;
  price: number;
  newPrice?: number;
  categories: string;
  detail: string;
  numberIndex?: number;
};

const ProductCard = (props: ProductCardProps) => {
  const { favorite, addToFavorite, removeFromFavorite } = useAddContext();

  const favChecker = (id: number) => {
    const boolean = favorite.some((product : any) => product.id === id);
    return boolean;
  };

  console.log("favorite are", favorite);

  return (
    <div className="relative hover:scale-105 ease-in-out duration-300">
      <Link to={`/product/${props.id}`}>
        <div
          key={props.id}
          className="drop-shadow-lg w-[240px] h-fit bg-white inline-block p-3 m-3 rounded-2xl cursor-pointer"
        >
          {props.numberIndex && (
            <span className="text-2xl w-[3.5rem] h-[3.5rem] flex items-center justify-center text-center text-white font-bold rounded-full bg-[#F56362] top-[-0.8rem] left-[40%] absolute font-lilitaOne">
              {props.numberIndex}
            </span>
          )}
          <div className="flex justify-center">
            <img src={props.img[0]} alt="Product Image" className="h-40" />
          </div>
          <div className="mt-3">
            <div className="flex w-full justify-between items-center">
              <h4 className=" text-gray-500 items-center font-anuphan">
                {" "}
                ขายแล้ว: {props.saleAmount}
              </h4>
            </div>
            <h1 className="mb-5 mt-2 text-sm font-bold h-12 font-anuphan tracking-[1px]">
              {props.productName}
            </h1>
            <hr className="w-[95%] m-auto" />
            <div className="flex items-center justify-between mt-5">
              <h3 className="font-bold flex items-center gap-1">
                <MdOutlineStar className="fill-yellow-400" />
                {props.rate}{" "}
                <span className="text-gray-500 text-xs font-light font-anuphan">
                  ({props.numRate})
                </span>
              </h3>
              <div className="flex">
                {props.newPrice ? (
                  <>
                    <span className="text-[#F56362] font-bold mr-3 font-anuphan">
                      ฿{(props.price / 100) * 75}
                    </span>
                    <h3 className="font-bold line-through text-black font-anuphan">
                      ฿{props.price}
                    </h3>
                  </>
                ) : (
                  <h3 className="font-bold text-blac font-anuphan">
                    ฿{props.price}
                  </h3>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="absolute top-[195px] right-8 hover:scale-105 ease-in-out duration-300">
        {favChecker(props.id) ? (
          <button onClick={() => removeFromFavorite(props.id+"")}>
            <IoHeartSharp size={25} className="fill-red-600" />
          </button>
        ) : (
          <button onClick={() => addToFavorite(props)}>
            <IoHeartSharp size={25} className="fill-[#F7C4AD] " />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;