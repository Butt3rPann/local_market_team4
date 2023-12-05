import { data } from '../../../public/data';
import { IoHeartSharp } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import { useState } from 'react'

const ProductList = () => {


    const [items, setItems] = useState(data);

    const filterItem = (categItem: string) => {
        const updateItem = data.filter((curItem) => {
            return curItem.categories === categItem;
        })
        setItems(updateItem)
    }

    const [noOfElement, setNoOfElement] = useState(12)
    const slice = data.slice(0, noOfElement)

  return (
    <>
      <div className='w-screen'>
        <div className='flex flex-wrap justify-center text-[1.5vw] text-white m-0 mt-9 w-screen gap-4 '>
          <button className='drop-shadow-lg w-[13vw] py-2 bg-[#F56362] rounded-2xl active:bg-[#F7C4AD]' onClick={() => setItems(data)}>
            <p>All</p>
            <p className='opacity-50'>ทั้งหมด</p>
            </button>
          <button className='drop-shadow-lg w-[13vw] py-2 bg-[#F56362] rounded-2xl active:bg-[#F7C4AD]' onClick={() => filterItem('dessert')}>
            <p>Dessert</p>
            <p className='opacity-50'>ขนม</p>
          </button>
          <button className='drop-shadow-lg w-[13vw] py-2 bg-[#F56362] rounded-2xl active:bg-[#F7C4AD]' onClick={() => filterItem('clothes')}>
            <p>Clothes</p>
            <p className='opacity-50'>เสื้อผ้า</p>
          </button>
          <button className='drop-shadow-lg w-[13vw] py-2 bg-[#F56362] rounded-2xl active:bg-[#F7C4AD]' onClick={() => filterItem('stationery')}>
            <p>Stationery</p>
            <p className='opacity-50'>เครื่องเขียน</p>
          </button>
          <button className='drop-shadow-lg w-[13vw] py-2 bg-[#F56362] rounded-2xl active:bg-[#F7C4AD]' onClick={() => filterItem('book')}>
            <p>Book</p>
            <p className='opacity-50'>หนังสือ</p>
          </button>
          <button className='drop-shadow-lg w-[13vw] py-2 bg-[#F56362] rounded-2xl active:bg-[#F7C4AD]' onClick={() => filterItem('other')}>
            <p>others</p>
            <p className='opacity-50'>อื่นๆ</p>
          </button>
        </div>

        <div className="flex items-center justify-center my-8">
            <div className='mx-10 grid grid-auto-fit-lg '>
            {items.slice(0, 12).map((elem) => {
                const {id, productName, img, price, rate, numRate, saleAmount} = elem;
                return (
                    <>
                        <div key={id} className=" drop-shadow-lg h-fit bg-white inline-block p-3 m-3 rounded-2xl cursor-pointer hover:scale-105 ease-in-out duration-300">
                            <img className="rounded-xl" src={img} alt="Product Image"/>
                            <div className="mt-3">
                                <div className="flex w-full justify-between items-center">
                                    <h4 className=" text-gray-500 items-center"> ขายแล้ว: {saleAmount}</h4>
                                    <button><IoHeartSharp size={20} className="fill-[#F7C4AD] stroke-red-600 hover:fill-red-600" /></button>
                                </div >
                                <h1 className="mb-5 mt-2 text-xl font-bold">{productName}</h1>
                                <hr className="w-[95%] m-auto" />
                                <div className="flex items-center justify-between mt-5">
                                    <h3 className="font-bold flex items-center gap-1"><MdOutlineStar className="fill-yellow-400" />{rate}{" "}<span className="text-gray-500 text-xs font-light">({numRate})</span></h3>
                                    <h3 className="font-bold">฿{price}</h3>
                                </div>
                            </div>
                        </div>
                    </>
                )})}
            </div>
        </div>
      </div>
    </>
  )
}

export default ProductList
