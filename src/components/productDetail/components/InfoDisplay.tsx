import { FC, useState } from "react";
import { IData } from "../interfaces/IData";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

const InfoDisplay: FC<{
  data: IData;
  handleBuy: () => void;
  handleAddCart: () => void;
}> = ({ data, handleBuy, handleAddCart }) => {
  const renderStar = (rate: number) => {
    const starSize = "37px"; // Set the size of the star icons

    const stars = [];
    for (let i = 0; i < Math.floor(rate); i++) {
      stars.push(<IoStar key={i} size={starSize} color="#774F39" />);
    }
    if (rate % 1 !== 0) {
      stars.push(
        <IoStarHalf key={stars.length} size={starSize} color="#774F39" />
      );
    }
    while (stars.length < 5) {
      stars.push(
        <IoStarOutline key={stars.length} size={starSize} color="#774F39" />
      );
    }
    return stars;
  };
  const [amount, setAmount] = useState<number>(1);

  return (
    <div className="flex flex-col justify-start pl-5">
      <div className="w-[580px] text-[#774F39] text-[40px] font-anuphan font-bold">
        {data.productName}
      </div>
      <div className="flex justify-start items-end">
        {renderStar(data.rate)}
        <div className="text-[#774F39] text-opacity-70 text-xl font-normal font-anuphan ml-[20px]">
          ขายแล้ว {data.saleAmount} ชิ้น
        </div>
      </div>
      <div className="h-[1px] border-[#774F39] border-[1px] w-full mt-10" />
      <div className="text-[#774F39] text-[20px] font-bold font-anuphan pt-3">
        รายละเอียด{" "}
      </div>
      <div className="text-[#774F39] text-[16px] font-medium font-anuphan w-[500px]">
        {data.detail}
      </div>
      <div className="text-[#774F39] text-[32px] font-bold font-anuphan pt-2">
        ฿ {data.price}
      </div>
      <div className="flex flex-row items-center">
        <div className="text-[#774F39] text-opacity-70 text-xl font-normal font-anuphan mr-5">
          ปริมาณ
        </div>
        <div className="w-[149.23px] h-[50.65px] relative">
          <div className="w-[149.23px] h-[50.65px] left-0 top-0 absolute bg-orange-50 rounded-[13.57px]" />
          <div className="w-[50.65px] h-[0px] left-[38.89px] top-0 absolute origin-top-left rotate-90 border border-[#DE7B00]"></div>
          <div className="w-[50.65px] h-[0px] left-[108.98px] top-0 absolute origin-top-left rotate-90 border border-[#DE7B00]"></div>
          <button
            className="left-[14.47px] top-[12.21px] absolute text-[#DE7B00] text-base font-normal font-anuphan"
            onClick={() => {
              setAmount((prevAmount) =>
                prevAmount != 1 ? prevAmount - 1 : prevAmount
              );
            }}
          >
            -
          </button>
          <button
            className="left-[125.72px] top-[12.21px] absolute text-[#DE7B00] text-base font-normal font-anuphan"
            onClick={() => {
              setAmount((prevAmount) =>
                prevAmount < 50 ? prevAmount + 1 : prevAmount
              );
            }}
          >
            +
          </button>
          <div className="left-[70.09px] top-[15.38px] absolute text-[#DE7B00] text-base font-normal font-anuphan">
            {amount}
          </div>
        </div>
      </div>
      <div className="mt-7 flex flex-row">
        <button
          onClick={() => handleBuy()}
          className="w-[126.52px] h-[40.55px] bg-red-400 rounded-lg flex justify-center items-center"
        >
          <div className="text-orange-50 text-base font-normal font-anuphan">
            ซื้อเลย
          </div>
        </button>
        <button
          onClick={() => handleAddCart()}
          className="ml-8 w-[126.52px] h-[40.55px] bg-red-400 rounded-lg flex justify-center items-center"
        >
          <div className="text-orange-50 text-base font-normal font-anuphan">
            เพิ่มลงตะกร้า
          </div>
        </button>
      </div>
    </div>
  );
};

export default InfoDisplay;
