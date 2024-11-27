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
        <div className="p-5 shadow-lg border rounded-lg transition-all duration-300 hover:shadow-xl bg-white">
            <div className="flex items-center">
                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] overflow-hidden rounded-md">
                    <img 
                        src={item.productEntity.imageUrl} 
                        alt="" 
                        className="w-full h-full object-cover object-top transform transition-transform duration-300 hover:scale-110" 
                    />
                </div>

                <div className="ml-5 space-y-2 flex-grow">
                    <p className="font-semibold text-lg text-gray-800">{item.title}</p>
                    
                    <div className="flex items-center space-x-2 text-sm">
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-600">Size: {item.size}</span>
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-600">{item.productEntity.color}</span>
                    </div>
                    
                    <p className="text-gray-600">Brand: {item.productEntity.brand}</p>

                    <div className="flex items-center space-x-4 pt-3">
                        <p className="text-xl font-bold text-indigo-600">LKR {item.discountedPrice}</p>
                        <p className="text-gray-400 line-through">LKR {item.price}</p>
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                            {item.productEntity.discountPercentage}% Off
                        </span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row items-center justify-between pt-6 border-t mt-4'>
                <div className='flex items-center space-x-2 bg-gray-50 rounded-lg p-1'>
                    <IconButton 
                        onClick={()=>handleUpdateCartItem(-1)} 
                        disabled={item.quantity<=1} 
                        sx={{
                            color:'#9155fd',
                            '&:hover': { backgroundColor: '#f3f0ff' }
                        }}
                    >
                        <RemoveCircleOutlineIcon/>
                    </IconButton>

                    <span className='py-1 px-7 font-medium text-gray-700'>{item.quantity}</span>

                    <IconButton 
                        onClick={()=>handleUpdateCartItem(1)} 
                        sx={{
                            color:'#9155fd',
                            '&:hover': { backgroundColor: '#f3f0ff' }
                        }}
                    >
                        <AddCircleOutlineIcon/>
                    </IconButton>
                </div>

                <Button 
                    onClick={handleRemoveCartItem} 
                    sx={{
                        color:"RGB(145 85 253)",
                        '&:hover': {
                            backgroundColor: '#f3f0ff'
                        },
                        marginTop: { xs: '1rem', lg: '0' }
                    }}
                    startIcon={<RemoveCircleOutlineIcon />}
                >
                    Remove
                </Button>
            </div>
        </div>
    )
}

export default CartItem
