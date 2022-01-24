import React , { useContext } from 'react';
import { ProductsContext } from "../context/ProductContextProvider";
import { short } from "../helper/functions";
import { Link } from "react-router-dom";

const ProductsDetail = ( props ) => {
    const id = props.match.params.id;
    const data = useContext ( ProductsContext );
    const product = data[ id - 1 ];
    const { image , title , description , price , category } = product;
    return (
        <div>
            <img src={ image } alt="product"/>
            <div>
                <h3>{ short ( title ) }</h3>
                <p>{ description }</p>
                <p><span>Category: </span>{ category }</p>
                <div>
                    <span>{ price } $</span>
                    <Link to="/products">Back To main Page </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetail;