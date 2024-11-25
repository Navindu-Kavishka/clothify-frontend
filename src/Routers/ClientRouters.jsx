
import { Route, Routes } from "react-router-dom"
import NavBar from "../client/components/NavBar/NavBar"

import Footer from "../client/components/Footer/Footer"

import Cart from "../client/components/Cart/Cart"
import Product from "../client/components/Product/Product"
import ProductDetails from "../client/components/ProductDetails/ProductDetails"
import HomePage from "../client/pages/HomePage/HomePage"
import Checkout from "../client/components/Checkout/Checkout"
import Order from "../client/components/Order/Order"
import OrderDetails from "../client/components/Order/OrderDetails"
import PaymentSuccess from "../client/components/Payment/PaymentSuccess"

const ClientRouters = () => {
  return (
    <div>

        <div>
            {/* <NavBar/> */}
            <NavBar/>
        </div>

        <Routes>
          <Route path="/login" element={<HomePage />} />
          <Route path="/register" element={<HomePage />} />


            <Route path="/" element={<HomePage />} ></Route>
            <Route path="/cart" element={<Cart/>} ></Route>
            <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product/>} ></Route>
            <Route path="/product/:productId" element={<ProductDetails/>} ></Route>
            <Route path="/checkout" element={<Checkout/>} ></Route>
            <Route path="/account/order" element={<Order/>} ></Route>
            <Route path="/account/order/:orderId" element={<OrderDetails/>} ></Route>
            <Route path="/payment/:orderId" element={<PaymentSuccess/>} ></Route>
            


        </Routes>

        <div>
            {/* <Footer/> */}
            <Footer/>
        </div>
      
    </div>
  )
}

export default ClientRouters
