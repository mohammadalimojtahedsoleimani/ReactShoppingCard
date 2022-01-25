import React , { useContext } from 'react';
import { short , isInCart , quantityCount } from "../../helper/functions";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider"

const Product = ( { productData } ) => {
    const { state , dispatch } = useContext ( CartContext );
    return (
        <div>
            <img src={ productData.image } alt="photo" style={ { width : "200px" } }/>
            <h3>{ short ( productData.title ) }</h3>
            <p>{ productData.price }</p>
            <div>
                <Link to={ `/products/${ productData.id }` }>Details</Link>
                <div>
                    {
                        isInCart ( state , productData.id ) ?
                            <button
                                onClick={ () => dispatch ( {
                                    type : "INCREASE" ,
                                    payload : productData
                                } ) }>+</button> :
                            <button onClick={ () => dispatch ( { type : "ADD_ITEM" , payload : productData } ) }>Add to
                                Cart</button>
                    }
                    {
                        quantityCount ( state , productData.id ) > 1 &&
                        <button onClick={ () => dispatch ( { type : "DECREASE" , payload : productData } ) }>-</button>
                    }
                    {
                        quantityCount ( state , productData.id ) === 1 && <button
                            onClick={ () => dispatch ( { type : "REMOVE_ITEM" , payload : productData } ) }>Remove</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;