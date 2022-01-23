import React , { useContext } from 'react';
import { ProductsContext } from "../context/ProductContextProvider";
import Product from "./Shared/Product";

const Store = () => {

    const products = useContext ( ProductsContext );
    return (
        <div style={ { display : "flex" , flexWrap : "wrap" , justifyContent : "space-between" } }>
            {
                products.map ( item => <Product key={ item.id } productData={ item }/> )
            }
        </div>
    );
};

export default Store;