/* eslint-disable react/prop-types */
//import sample from '../../assets/images/product/sg1.jpg'
import { useNavigate } from 'react-router-dom';
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (

    <div onClick={()=>navigate(`/product/${product.id}`)} className="productCard w-[15rem] w-[15rem] m-3 transition-all cursor-pointer">
      <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt="" />
      </div>

      <div className='textArea bg-white p-3'>
        <div>
          <p className='font-bold opacity-60'>{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className='flex items-center space-x-2'>
          <p className='font-semibold'>LKR {product.discountedPrice}</p>
          <p className='line-through font-bold opacity-50'>LKR {product.price}</p>
          <p className='text-green-600 font-semibold'>{product.discountedPercentage}% Off</p>
        </div>
      </div>

    </div>
  )
}

export default ProductCard
