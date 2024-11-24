/* eslint-disable react/prop-types */
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import IconButton from '@mui/material/IconButton'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../../State/Cart/Action';



const CartItem = ({item}) => {

    const dispatch = useDispatch();


    const handleUpdateCartItem = (num) => {
        const data = {data:{quantity:item.quantity+num},cartItemId:item.id}
        dispatch(updateCartItem(data))
    }

    const handleRemoveCartItem = () => {
        dispatch(removeCartItem(item.id))
    }

    return (
        <div className="p-5 shadow-lg border rounded-md">

            <div className="flex items-center">

                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                    <img src={item.productEntity.imageUrl} alt="" className="w-full h-full object-cover object-top" />
                </div>

                <div className="ml-5 space-y-1">

                    <p className="font-semibold">{item.title}</p>
                    <p className="opacity-70">Size: {item.size}, {item.productEntity.color}</p>
                    <p className="opacity-70 mt-2">Brand: {item.productEntity.brand}</p>

                    <div className="flex space-x-5 items-center text-gray-900 pt-6">
                        <p className="font-semibold">LKR {item.discountedPrice}</p>
                        <p className="opacity-50 line-through">LKR {item.price}</p>
                        <p className="text-green-600 font-semibold">{item.productEntity.discountPercentage}% Off</p>
                    </div>

                </div>

            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>

                    <div className='flex items-center space-x-2'>
                        <IconButton onClick={()=>handleUpdateCartItem(-1) } disabled={item.quantity<=1} sx={{color:'#9155fd'}} aria-label="">
                            <RemoveCircleOutlineIcon/>
                        </IconButton>

                        <span className='py-1 px-7 border rounded-sm'>{item.quantity}</span>
                            <IconButton onClick={()=>handleUpdateCartItem(1) } sx={{color:'#9155fd'}} aria-label="">
                              <AddCircleOutlineIcon/>
                            </IconButton>
                        

                    </div>

                    <div>
                        <Button onClick={handleRemoveCartItem} sx={{color:"RGB(145 85 253)"}}>
                          Remove
                        </Button>
                    </div>

                </div>
        </div>
    )
}

export default CartItem
