import ProductCard from '../layouts/ProductCard';
import { useAddContext } from '../context/appContext';

const Favorite = () => {

  const {favorite, addToFavorite, removeFromFavorite} = useAddContext();

  console.log('favorite are', favorite);

  const favChecker = (id : number) => {
    const boolean = favorite.some((product) => product.id === id);
    return boolean;
  }

  return (
    <div className='w-full'>
      <h1 className="tracking-[.3em] font-extrabold text-[70px] mt-10 text-[#F56362] text-center drop-shadow-lg">
        FAVORITE
      </h1>
      <div className='my-3 mx-10 grid grid-cols-5'>
        {favorite.map((product) => {
          return (
            <>
              <ProductCard {...product}/>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Favorite
