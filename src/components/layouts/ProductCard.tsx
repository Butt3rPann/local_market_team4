import { IoHeartSharp } from 'react-icons/io5'
import { MdOutlineStar } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useAddContext } from '../context/appContext';

type ProductCardProps = {
        id: number,
        img: string,
        saleAmount: number,
        productName: string,
        rate: number,
        numRate: number,
        price: number,
        newPrice?: number,
        categories: string,
        detail: string
        numberIndex?: number
}

const ProductCard = (props: ProductCardProps) => {

    const {favorite, addToFavorite, removeFromFavorite} = useAddContext();

    const favChecker = (id : number) => {
        const boolean = favorite.some((product) => product.id === id);
        return boolean;
    }

    console.log('favorite are', favorite);

  return (
    <div className='relative hover:scale-105 ease-in-out duration-300'>
        <Link to=":id">
            <div key={props.id} className="drop-shadow-lg h-fit bg-white inline-block p-3 m-3 rounded-2xl cursor-pointer ">
                {props.numberIndex && (
                <span className="text-2xl w-[3.5rem] h-[3.5rem] flex items-center justify-center text-center text-white font-bold rounded-full bg-[#F56362] top-[-0.8rem] left-[40%] absolute">
                 {props.numberIndex} 
                 </span>)}
                <img className="rounded-xl" src={props.img[0]} alt="Product Image"/>
                <div className="mt-3">
                    <div className="flex w-full justify-between items-center">
                        <h4 className=" text-gray-500 items-center"> ขายแล้ว: {props.saleAmount}</h4>
                    </div >
                    <h1 className="mb-5 mt-2 text-xl font-bold">{props.productName}</h1>
                    <hr className="w-[95%] m-auto"/>
                    <div className="flex items-center justify-between mt-5">
                        <h3 className="font-bold flex items-center gap-1"><MdOutlineStar className="fill-yellow-400" />{props.rate}{" "}<span className="text-gray-500 text-xs font-light">({props.numRate})</span></h3>
                        <h3 className="font-bold">฿{props.price}</h3>
                    </div>
                </div>
            </div>
        </Link>
        <div className="absolute top-[225px] right-8 hover:scale-105 ease-in-out duration-300">
            {favChecker(props.id) ? (
                <button onClick={() => removeFromFavorite(props.id)}>
                    <IoHeartSharp size={25} className="fill-red-600" />
                </button>) : (
                <button onClick={() => addToFavorite(props)}>
                    <IoHeartSharp size={25} className="fill-[#F7C4AD] " />
                </button> 
            )}
        </div>
    </div>
  )
}

export default ProductCard
