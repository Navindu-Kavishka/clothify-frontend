import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import IconButton from '@mui/material/IconButton'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button'


const CartItem = () => {
    return (
        <div className="p-5 shadow-lg border rounded-md">

            <div className="flex items-center">

                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className="w-full h-full object-cover object-top" />
                </div>

                <div className="ml-5 space-y-1">

                    <p className="font-semibold">Product Title</p>
                    <p className="opacity-70">Size: L, White</p>

                    <div className="flex space-x-5 items-center text-gray-900 pt-6">
                        <p className="font-semibold">LKR 3000</p>
                        <p className="opacity-50 line-through">LKR 3300</p>
                        <p className="text-green-600 font-semibold">10% Off</p>
                    </div>

                </div>

            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>

                    <div className='flex items-center space-x-2'>
                        <IconButton sx={{color:'#9155fd'}} aria-label="">
                            <RemoveCircleOutlineIcon/>
                        </IconButton>

                        <span className='py-1 px-7 border rounded-sm'>3</span>
                            <IconButton sx={{color:'#9155fd'}} aria-label="">
                              <AddCircleOutlineIcon/>
                            </IconButton>
                        

                    </div>

                    <div>
                        <Button variant="text" color="error">
                          Remove
                        </Button>
                    </div>

                </div>
        </div>
    )
}

export default CartItem
