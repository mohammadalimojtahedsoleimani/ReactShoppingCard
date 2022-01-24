import React from 'react';
import { short } from "../../helper/functions";
import { Link } from "react-router-dom";

const Product = ( { productData } ) => {
    return (
        <div>
            <img src={ productData.image } alt="photo" style={ { width : "200px" } }/>
            <h3>{ short ( productData.title ) }</h3>
            <p>{ productData.price }</p>
            <div>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div>
                    <button>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;