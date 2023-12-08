import { data } from '../lib/data';
import { IoHeartSharp } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { ProductCategories } from '../lib/ProductCategories'
import ProductCard from '../layouts/ProductCard';

const ProductList = () => {

    const [items, setItems] = useState(data);

    const filterItem = (categItem: string) => {
        const updateItem = data.filter((curItem) => {
            return curItem.categories === categItem;
        })
        setItems(updateItem)
    }

  return (
    <>
      <div className='w-screen'>
      <h1 className="tracking-[.3em] font-extrabold text-[70px] mt-10 text-[#F6AB4F] text-center drop-shadow-lg">
        PRODUCTS
      </h1>
        <div className='flex flex-wrap justify-center text-[1.5vw] text-white m-0 mt-9 w-screen gap-4'>
          <button className='drop-shadow-lg w-[13vw] py-2 bg-[#F56362] rounded-2xl active:bg-[#F7C4AD]' onClick={() => setItems(data)}>
            <p>All</p>
            <p className='opacity-50'>ทั้งหมด</p>
          </button>
          {ProductCategories.map((categ) => {
            const {categoriesID, nameEng, nameThai} = categ;
            return (
                <button key={categoriesID} className='drop-shadow-lg w-[13vw] py-2 bg-[#F56362] rounded-2xl active:bg-[#F7C4AD]' onClick={() => filterItem(nameEng)}>
                    <p>{nameEng}</p>
                    <p className='opacity-50'>{nameThai}</p>
                </button>
            )})}
        </div>

        <div className="flex items-center justify-center my-8">
            <div className='mx-10 grid grid-auto-fit-lg '>
            {items.slice(0, 16).map((product) => {
                return (
                    <ProductCard {...product} />
                )})}
            </div>
        </div>
      </div>
    </>
  )
}

export default ProductList



