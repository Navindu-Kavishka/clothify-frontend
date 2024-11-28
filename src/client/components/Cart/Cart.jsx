import { Button } from "@mui/material"
import CartItem from "./CartItem"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "../../../State/Cart/Action";
// NEW: Import motion for animations
import { motion } from "framer-motion";

const Cart = () => {
    const navgate = useNavigate();
    const dispatch = useDispatch();
    const {cart} = useSelector((store) => store);

    const handleCheckout = () => {
        navgate('/checkout?step=2')
    }

    useEffect(()=>{
        dispatch(getCart());
    },[cart.updateCartItem,cart.deleteCartItem])
   
    return (
        // UPDATED: Added background color and padding
        <div className="bg-gray-50 py-8">
            {/* NEW: Added container with max width */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* NEW: Added page title */}
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

                {/* UPDATED: Improved grid layout with gap */}
                <div className="lg:grid grid-cols-3 gap-8 relative">
                    {/* UPDATED: Cart items section with animations */}
                    <div className="col-span-2 space-y-4">
                        {cart.cart?.cartItemEntities.map((cartItem) => (
                            <motion.div
                                key={cartItem.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <CartItem item={cartItem} />
                            </motion.div>
                        ))}
                    </div>

                    {/* UPDATED: Order summary with enhanced styling */}
                    <div className="lg:sticky lg:top-4 mt-8 lg:mt-0">
                        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-900 uppercase mb-4">
                                Order Details
                            </h2>
                            
                            <div className="space-y-4 font-semibold">
                                {/* UPDATED: Price details with improved spacing */}
                                <div className="flex justify-between items-center text-gray-700">
                                    <span>Price</span>
                                    <span>LKR {cart.cart?.totalPrice}</span>
                                </div>

                                <div className="flex justify-between items-center text-green-600">
                                    <span>Discount</span>
                                    <span>- LKR {cart.cart?.discount}</span>
                                </div>

                                <div className="flex justify-between items-center text-gray-700">
                                    <span>Delivery Charge</span>
                                    <span className=" text-green-600">Free</span>
                                </div>

                                {/* UPDATED: Total amount with border top */}
                                <div className="pt-4 border-t border-gray-200">
                                    <div className="flex justify-between items-center font-bold text-gray-900">
                                        <span>Total Amount</span>
                                        <span>LKR {cart.cart?.totalDiscountedPrice}</span>
                                    </div>
                                </div>
                            </div>

                            {/* UPDATED: Enhanced checkout button */}
                            <Button 
                                onClick={handleCheckout} 
                                variant='contained' 
                                fullWidth
                                sx={{
                                    mt: 4,
                                    py: '0.8rem',
                                    bgcolor: '#9155fd',
                                    '&:hover': {
                                        bgcolor: '#804dee'
                                    }
                                }}
                            >
                                Proceed to Checkout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
