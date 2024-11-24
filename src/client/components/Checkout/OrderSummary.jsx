import { Button } from "@mui/material"
import AddressCard from "../AddressCard/AddressCard"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrderById } from "../../../State/Order/Action";
import { useLocation } from "react-router-dom";
import CartItem from "../Cart/CartItem";



const OrderSummary = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const {order} = useSelector(store=>store);
    const searchParams = new URLSearchParams(location.search);
    const orderId = searchParams.get('order_id');

    useEffect(() => {
        dispatch(getOrderById(orderId))
    }, [orderId])

 
  return (
    <div>
      <div className="p-5 border rounded-e-md shadow-lg">
        <AddressCard address={order.order?.shippingAddressEntity} />
      </div> 

      <div>

        <div className="lg:grid grid-cols-3 relative">
            <div className="col-span-2">
               {order.order?.orderItemEntities.map((cartItem, index) => <CartItem item={cartItem} key={index} />)}
            </div>
            <div className="px-5 sticky top-0 bg-white lg:px-16">
                <div className="border">
                    <p className="uppercase font-bold opacity-60 pb-4">Order Details</p>
                    <hr />
                    <div className="space-y-3 font-semibold mb-10">
                        <div className="flex justify-between pt-3 text-black">
                            <span>Price</span>
                            <span>LKR {order.order?.totalPrice}</span>
                        </div>

                        <div className="flex justify-between pt-3 text-green-600">
                            <span>Discount</span>
                            <span className="text-green-600">- LKR {order.order?.discount}</span>
                        </div>

                        <div className="flex justify-between pt-3 text-black">
                            <span>Delivery Charge</span>
                            <span className="text-green-600">Free</span>
                        </div>

                        <div className="flex justify-between pt-3 text-black font-bold">
                            <span>Total Amount</span>
                            <span>LKR {order.order?.totalDiscountedPrice}</span>
                        </div>
                    </div>
                    <Button variant='contained' className="w-full mt-5" sx={{px:'2.5rem',py:'0.7rem',bgcolor:'#9155fd'}}>
                         Checkout
                    </Button>
                </div>
            </div>
        </div>

        
      
    </div>

    </div>
  )
}

export default OrderSummary
