import React from 'react';
import ProductContextProvider from "./context/ProductContextProvider";
import Store from "./components/Store";
import { Switch , Route , Redirect } from "react-router-dom";
import ProductsDetail from "./components/ProductsDetail";
import CartContextProvider from "./context/CartContextProvider";

const App = () => {
    return (
        <div>
            <ProductContextProvider>
                <CartContextProvider>
                    <Switch>
                        <Route path="/products/:id" component={ ProductsDetail }/>
                        <Route path="/products" component={ Store }/>
                        <Redirect to="/products"/>
                    </Switch>
                </CartContextProvider>
            </ProductContextProvider>
        </div>
    );
};

export default App;