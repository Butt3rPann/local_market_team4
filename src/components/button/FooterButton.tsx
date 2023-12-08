import { FootButtonData } from "../lib/FootButtonData";

const FooterButton = () => {
  return (
    <>
      {FootButtonData.map((item) => (
        <div>
          <button className="drop-shadow-md w-[9vw] py-2 bg-[#F56362] rounded-2xl  border-[2.5px] border-solid border-white hover:bg-[#F56362B2] font-lilitaOne tracking-[1.5px]">
            {item.text}
          </button>
        </div>
      ))}
    </>
  );
};

export default FooterButton;