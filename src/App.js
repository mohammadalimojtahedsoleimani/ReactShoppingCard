import React from 'react';
import ProductContextProvider from "./context/ProductContextProvider";
import Store from "./components/Store";
import { Switch , Route , Redirect } from "react-router-dom";
import ProductsDetail from "./components/ProductsDetail";
import CartContextProvider from "./context/CartContextProvider";
import Navbar from "./components/Shared/Navbar";
import ShopCart from "./components/ShopCart";

const App = () => {
    return (
        <div>
            <ProductContextProvider>
                <CartContextProvider>
                    {/*chon mikhad dakhel hame route ha neshan dahad.*/ }
                    <Navbar/>
                    <Switch>
                        <Route path="/products/:id" component={ ProductsDetail }/>
                        <Route path="/products" component={ Store }/>
                        <Route path="/Cart" component={ ShopCart }/>
                        <Redirect to="/products"/>
                    </Switch>
                </CartContextProvider>
            </ProductContextProvider>
        </div>
    );
};

export default App;