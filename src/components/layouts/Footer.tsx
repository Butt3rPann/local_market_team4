import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import FooterButton from "../button/FooterButton";

const Footer = () => {
  return (
    <div className="w-screen bottom-0">
      <div className="w-screen bg-[#F7C4AD] bottom-0 h-fit mt-[4em] p-[4em] pl-[5em] pr-[5em] flex justify-between items-start">
        <div className="flex flex-col w-[300px]">
          <h1 className="font-bold text-[35px]">Mod Market</h1>
          <h2 className="font-bold text-[20px] mt-5">Address</h2>
          <p>
            126 Pracha Uthit , Bang Mod, Khet Thung Khru, Krung Thep Maha Nakhon
            10140
          </p>
        </div>
        <div className="flex flex-col">
          <p className="flex flex-wrap justify-center text-[1.2vw] text-white m-0 mt-6 w-[screen] gap-4">
            <FooterButton />
          </p>
          <p className="mt-4"> copyright © 2023 Teamsi-migieow</p>
          <div className="flex gap-8 mt-5">
            <button>
              <RiInstagramFill size={30} color={"#F55"} />
            </button>
            <button>
              <FaTwitter size={30} color={"#F55"} />
            </button>
            <button>
              <FaFacebook size={30} color={"#F55"} />
            </button>
            <button>
              <FaGoogle size={30} color={"#F55"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;