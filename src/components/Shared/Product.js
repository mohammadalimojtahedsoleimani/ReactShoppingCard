import React from 'react';
import { short } from "../helper/functions";

const Product = ( { productData } ) => {
    return (
        <div>
            <img src={ productData.image } alt="photo" style={ { width : "200px" } }/>
            <h3>{ short ( productData.title ) }</h3>
            <p>{ productData.price }</p>
            <div>
                <a href="">Details</a>
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