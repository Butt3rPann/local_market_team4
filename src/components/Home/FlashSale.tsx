import { data } from "../lib/data";
import ProductCard from "../layouts/ProductCard";
import { BsFillLightningFill } from "react-icons/bs";
import More from "../button/More";

function FlashSale() {
  const shuffle = (array: any[]) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const flashSaleProducts = (limit = 10) => {
    const productsWithNewPrice = data.filter((product) => product.newPrice);
    const shuffledProducts = shuffle([...productsWithNewPrice]);
    return shuffledProducts.slice(0, limit);
  };

  const products = flashSaleProducts();

  return (
    <div className="pt-[1em] pb-[2em] mt-0">
      <div className="ml-[4em] mt-5">
        <h2 className="flex items-center text-[45px] font-bold text-[#F56362]">
          F
          <span>
            <BsFillLightningFill color={"#F56362"} />
          </span>
          ash Sale
        </h2>
        <div className="flex items-center">
          <h3 className="text-[#F6AB4F] font-bold text-[20px]">On Sale Now</h3>
          <div className="flex gap-2 ml-3">
            <h1 className="p-3 bg-[#F6AB4F] text-white font-bold">10</h1>
            <p className="text-[20px] font-bold text-[#F6AB4F]"> : </p>
            <h1 className="p-3 bg-[#F6AB4F] text-white font-bold">35</h1>
            <p className="text-[20px] font-bold text-[#F6AB4F]"> : </p>
            <h1 className="p-3 bg-[#F6AB4F] text-white font-bold">07</h1>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-8">
        <div className="mx-10 grid grid-cols-5">
          {products.map((product: any) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
      <More />
    </div>
  );
}

export default FlashSale;
