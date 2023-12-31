import { FC } from "react";
import { IData } from "../interfaces/IData";
import { IShop } from "../../lib/shopData";
import { BsShop } from "react-icons/bs";
import { MdInsertComment } from "react-icons/md";

const ProductFooter: FC<{
  data: IData;
  shopDatas: { shopData: IShop; shopProduct: number };
  handleVisitShop: () => void;
  handleComment: () => void;
}> = ({ data, shopDatas, handleComment, handleVisitShop }) => {
  const renderPFP = () => {
    return (
      <>
        {!shopDatas.shopData.shopProfileImg ? (
          <div
            className="rounded-full bg-black"
            style={{ width: "33px", height: "33px" }}
          />
        ) : (
          <img
            src={shopDatas.shopData.shopProfileImg}
            style={{ width: "33px", height: "33px", borderRadius: "50%" }}
            alt="Shop Profile"
          />
        )}
      </>
    );
  };
  return (
    <div className="bg-[#FFF3E5] w-[950px] h-[120px] mt-20 p-5 flex flex-row justify-between items-center border-[#774F39] border-[1.5px] rounded-xl">
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          {renderPFP()}
          <div className="text-amber-600 text-[18px] font-normal font-anuphan ml-5">
            {shopDatas.shopData.name}
          </div>
          <div className="w-[230px] h-[15.93px] text-rose-500 text-[15px] font-normal font-anuphan ml-10">
            เข้าระบบล่าสุดเมื่อ {shopDatas.shopData.lastOnline} นาทีที่ผ่านมา
          </div>
        </div>
        <div className="flex flex-row mt-3">
          <div>
            <span className="text-amber-600 text-[15px] font-normal font-anuphan">
              {shopDatas.shopProduct}
            </span>
            <span className="text-black text-opacity-80 text-[15px] font-normal font-anuphan">
              {" "}
              รายการสินค้า
            </span>
          </div>
          <div className="ml-10">
            <span className="text-amber-600 text-[15px] font-normal font-anuphan">
              {data.rate}
            </span>
            <span className="text-black text-opacity-80 text-[15px] font-normal font-anuphan">
              {" "}
              ให้คะแนน
            </span>
          </div>
          <div className="ml-10">
            <span className="text-amber-600 text-[15px] font-normal font-anuphan">
              {String((data.numRate / data.saleAmount) * 100).substring(0, 5)}%
            </span>
            <span className="text-black text-opacity-80 text-xs font-normal font-anuphan">
              {" "}
              ให้คะแนน
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div
          onClick={() => handleVisitShop()}
          className="w-[172.62px] h-[53.12px] bg-red-400 flex flex-row justify-center items-center border-white border-[3px] drop-shadow-lg"
        >
          <div className="w-[55.77px] h-[21.25px] text-orange-50 text-base font-normal font-anuphan">
            ดูร้านค้า
          </div>
          <BsShop color={"white"} />
        </div>
        <MdInsertComment
          onClick={() => handleComment()}
          color={"#F56362 "}
          size={"56px"}
          style={{ transform: "scaleX(-1)" }}
          className="ml-8"
        />
      </div>
    </div>
  );
};

export default ProductFooter;
