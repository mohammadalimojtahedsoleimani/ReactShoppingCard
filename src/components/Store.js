import React , { useContext } from 'react';
import { ProductsContext } from "../context/ProductContextProvider";
import Product from "./Shared/Product";
import Spinner from "../assets/icons/Spinner-1s-200px.gif"
import styles from "./Store.module.css";

const Store = () => {

    const products = useContext ( ProductsContext );
    return (
        <>

            <div className={styles.svgs}>
                {
                    products.length === 0 && <img src={ Spinner } alt="AXE"/>
                }
            </div>
            <div className={ styles.container }>
                {
                    products.map ( item => <Product key={ item.id } productData={ item }/> )
                }
            </div>
        </>
    )
        ;
};

export default Store;