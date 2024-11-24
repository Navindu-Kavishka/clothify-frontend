import { Button } from "@mui/material"
import CartItem from "./CartItem"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "../../../State/Cart/Action";


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
    <div>

        <div className="lg:grid grid-cols-3 lg:px-16 relative">
            <div className="col-span-2">
               {cart.cart?.cartItemEntities.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)}
            </div>
            <div className="px-5 sticky top-0 bg-white lg:px-16">
                <div className="border">
                    <p className="uppercase font-bold opacity-60 pb-4">Order Details</p>
                    <hr />
                    <div className="space-y-3 font-semibold mb-10">
                        <div className="flex justify-between pt-3 text-black">
                            <span>Price</span>
                            <span>LKR {cart.cart?.totalPrice}</span>
                        </div>

                        <div className="flex justify-between pt-3 text-green-600">
                            <span>Discount</span>
                            <span className="text-green-600">- LKR {cart.cart?.discount}</span>
                        </div>

                        <div className="flex justify-between pt-3 text-black">
                            <span>Delivery Charge</span>
                            <span>LKR 500</span>
                        </div>

                        <div className="flex justify-between pt-3 text-black font-bold">
                            <span>Total Amount</span>
                            <span>LKR {cart.cart?.totalDiscountedPrice}</span>
                        </div>
                    </div>
                    <Button onClick={handleCheckout} variant='contained' className="w-full mt-5" sx={{px:'2.5rem',py:'0.7rem',bgcolor:'#9155fd'}}>
                         Checkout
                    </Button>
                </div>
            </div>
        </div>

        
      
    </div>
  )
}

export default Cart
