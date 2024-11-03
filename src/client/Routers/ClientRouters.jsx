
import { Route, Routes } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"

import Footer from "../components/Footer/Footer"

import Cart from "../components/Cart/Cart"
import Product from "../components/Product/Product"
import ProductDetails from "../components/ProductDetails/ProductDetails"
import HomePage from "../pages/HomePage/HomePage"
import Checkout from "../components/Checkout/Checkout"
import Order from "../components/Order/Order"
import OrderDetails from "../components/Order/OrderDetails"

const ClientRouters = () => {
  return (
    <div>

        <div>
            {/* <NavBar/> */}
            <NavBar/>
        </div>

        <Routes>
            <Route path="/" element={<HomePage />} ></Route>
            <Route path="/cart" element={<Cart/>} ></Route>
            <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product/>} ></Route>
            <Route path="/product/:productId" element={<ProductDetails/>} ></Route>
            <Route path="/checkout" element={<Checkout/>} ></Route>
            <Route path="/account/order" element={<Order/>} ></Route>
            <Route path="/account/order/:orderId" element={<OrderDetails/>} ></Route>
            


        </Routes>

        <div>
            {/* <Footer/> */}
            <Footer/>
        </div>
      
    </div>
  )
}

export default ClientRouters
