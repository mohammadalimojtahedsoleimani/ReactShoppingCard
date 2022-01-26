import React , { useContext } from 'react';
import { ProductsContext } from "../context/ProductContextProvider";
import Product from "./Shared/Product";
import Spinner from "../assets/icons/Spinner-1s-200px.gif"
const Store = () => {

    const products = useContext ( ProductsContext );
    return (
        <div style={ { display : "flex" , flexWrap : "wrap" , justifyContent : "space-between" } }>
            {
                products.length === 0 && <img src={Spinner} alt="AXE"/>
            }
            {
                products.map ( item => <Product key={ item.id } productData={ item }/> )
            }
        </div>
    );
};

export default Store;