import React , { useContext } from 'react';
import { CartContext } from "../../context/CartContextProvider";
import { short } from "../../helper/functions";
import trashIcon from "../../assets/icons/trash.svg"

const Cart = ( props ) => {
    const { image , title , price , quantity } = props.data
    const { dispatch } = useContext ( CartContext )
    return (
        <div>
            <img src={ image } alt="product"/>
            <div>
                <h3>{ short ( title ) }</h3>
                <p>{ price } $</p>
                <div>
                    <span>{ quantity }</span>
                </div>
                <div>
                    {
                        quantity > 1 ?
                            <button
                                onClick={ () => dispatch ( { type : "DECREASE" , payload : props.data } ) }>-</button> :
                            <button onClick={ () => dispatch ( {
                                type : "REMOVE_ITEM" ,
                                payload : this.props.data
                            } ) }><img src={ trashIcon } alt="trash" style={ { width : "20px" } }/></button>
                    }
                    <button onClick={ () => dispatch ( { type : "INCREASE" , payload : props.data } ) }>+</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;