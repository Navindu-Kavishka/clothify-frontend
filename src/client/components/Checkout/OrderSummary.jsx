import { Button } from "@mui/material"
import AddressCard from "../AddressCard/AddressCard"
import CartItem from "../Cart/CartItem"


const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 border rounded-e-md shadow-lg">
        <AddressCard/>
      </div> 

      <div>

        <div className="lg:grid grid-cols-3 relative">
            <div className="col-span-2">
               {[1,1,1].map((cartItem, index) => <CartItem key={index} />)}
            </div>
            <div className="px-5 sticky top-0 bg-white lg:px-16">
                <div className="border">
                    <p className="uppercase font-bold opacity-60 pb-4">Order Details</p>
                    <hr />
                    <div className="space-y-3 font-semibold mb-10">
                        <div className="flex justify-between pt-3 text-black">
                            <span>Price</span>
                            <span>LKR 4000</span>
                        </div>

                        <div className="flex justify-between pt-3 text-green-600">
                            <span>Discount</span>
                            <span className="text-green-600">- LKR 400</span>
                        </div>

                        <div className="flex justify-between pt-3 text-black">
                            <span>Delivery Charge</span>
                            <span>LKR 500</span>
                        </div>

                        <div className="flex justify-between pt-3 text-black font-bold">
                            <span>Total Amount</span>
                            <span>LKR 4500</span>
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
