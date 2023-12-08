import "react-slideshow-image/dist/styles.css";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

 const slideImages = [
   {
     url: "https://s3-alpha-sig.figma.com/img/473a/97bb/9fd497c2773e1323ce0c5b0ef7d03411?Expires=1702857600&Signature=XVZEVCjnF4cHsB0SQVPqHeHSZC3KRBP52G-DPEjnNmu~R51v~giQZkN48xgjrRyOf6fpaJ2zo6-hS371joU3MQwiTIT4WcExgECuFk~Tly6W-eeZ2dT1caBG2HimbF72S1NTm3t5AwoIc1oznKYGiGkPiVN1u75x7x2b4dfP-9HCi3iKhUdDBJGiCHr49dxYD7v64W21YNTCtnxAb1a4Pj6tzwqn~4tS5KQ2VJHiYL9BbnNA1NoFCL0Tknskx4Xm4kCRzOsQTAbJx2NfTya2RbDg1sXC40Mt~oEHCn0zLbKbNo5dvRZFV~BoD0-GZgBJv46OjMxCUzbjW4JRnD83yA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
   },
   {
     url: "https://s3-alpha-sig.figma.com/img/c173/91fc/55b0d60897d030520a08a9986afd4392?Expires=1702857600&Signature=I7~znsrW91RdWM5olpV-uvEHbvXZDszYSiU32DoOcB63TmRjq~5hposgTMNLi9d4syrVpyQYfBV47DRcBMpjcWkACIOJYwQPY5lGmbxy2FU2Kn~UIlyov9qd8RnbyFHnlYdWMRUljEjrrzE59dOW-JmDlBR4oGvFz-eJqFlAwZ0UsEo49MhPzGE1Wg1mvLklbK8YOwVf-LgZZNr8TE6cDo~bFRG7wmzQRxfzj6PM1dTn8Ye5BbA02yy4rbNL~8CPD6YWjd4eZ3ihjZbkcGrCi7TjvibBuN8RFGpaE~RQz8849o2HyUXDPMqhY~SX85HhLuzw6JF44kHYKP3vtaGzJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
   },
   {
     url: "https://s3-alpha-sig.figma.com/img/1e4d/5421/0ec0dd621d387396518307a4d5833128?Expires=1702857600&Signature=J6Zhp-v4uAiQWhOQzMPsvN5JNRXgK7rIkikQUofwU2nuOr9Qmwi3IC1BRsH2vkmjvhhGX6Xc4wLT3EoPDkbjSBQY6-zGalkiD8Ac2ooeYF8tNiyPHdUYODQ3GqIf-vrKwQXEApKwEXrPd~Cx1PZBOTg6a5xJ1b6Gwb9GEmAJWMu2gTPwUty~TpzjZSmCReIjBKnhhyytU4vbizh7Gq0~bTZuKpdFN1QJYyRnVhnO1YRk6TbRxi28V9BJeSN067xyplgUE1FuzRAGMb5tY~hfgKDywu8XjLaQxw4R8pqVU8qiI~gMKeClo3MWODRr8TXd-9El7vndXeiIemLZt-K4rg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
   },
   {
     url: "https://s3-alpha-sig.figma.com/img/b5cc/ccfa/1fd6cf1ac573ebb9c3544e046e90517f?Expires=1702857600&Signature=SYPui6E-CozevTv6PiDMxE2ua9etseYVu5Q7ZTTdFBCxmWHze6nzvT9NNDMICWTfNL-ehX~2sCJJbnhXTwgvNhGyiBvGww4uS2yjDXU-ppntJMg0OpE-TEvs4mp1KIbkPo0XlQ3FMDaD9zArvBrxYIZ1F1KcjfBQgQoTVCc69XCs9dvzcpI5zzDcofW7COifmAzwsf4imffrzKgOFQ~cnNEqvN8aBxrMUwZJvOMRvE4HYtoiUA7dz8TGLf6z4OOgEFUECi0r6DwTw-3Bv1RkK1plp0tfwgy5LvxFzFbndwzJziqVhcHKTJ-rq-hV4HejGGaMgYMPGCBZnHM1RQSk~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
   },
   {
     url: "https://s3-alpha-sig.figma.com/img/ba2a/7a04/69607fdac7bc70a8f0fe760541a5c664?Expires=1702857600&Signature=SF64Ae~f9JCGF0LjWxliBCEI1bDM6xV4wPiCH7giO-cxa99sW9C5DPZ5rFel4g1~I4ndNzvBuyJ4chyt9M4K5PuIRlveb--mlb-P7FJU0V1OckBLbaezNfZ27SlFF76UDudRHraIkD3Xo3Cd0PbTJn6vBHeP7HvXEqE-i3xOl6U3rPvk1qmKTXnLElEaNc6dB77Iwc9U7umvoeIpi7uJE70MZ8u6etur75gDaKFYjhbhDCYzNzaj9EKue-oORR6UxvxXNMNsczAg4reEHvqRzoyWLfUacT7qqdErrMX4yodv50mZ~TxagIdn~ELHZMfFIpx5flCpTW5ezTq73GbWXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
   },
 ];

 function Banner() {
   const [currentIndex, setCurrentIndex] = useState(0);

   const prevSlide = () => {
     const isFirstSlide = currentIndex === 0;
     const newIndex = isFirstSlide ? slideImages.length - 1 : currentIndex - 1;
     setCurrentIndex(newIndex);
   };

   const nextSlide = () => {
     const isLastSlide = currentIndex === slideImages.length - 1;
     const newIndex = isLastSlide ? 0 : currentIndex + 1;
     setCurrentIndex(newIndex);
   };

   return (
     <>
       <div className="flex justify-center items-center overflow-hidden w-screen relative group">
         <div
           style={{ backgroundImage: `url(${slideImages[currentIndex].url})` }}
           className="w-full h-[31vw] bg-cover bg-center duration-500"
         ></div>
         <div
           className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
           onClick={prevSlide}
         >
           <BsChevronCompactLeft size={30} />
         </div>
         <div
           className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
           onClick={nextSlide}
         >
           <BsChevronCompactRight size={30} />
         </div>
       </div>
    </>
   );
}

export default Banner;