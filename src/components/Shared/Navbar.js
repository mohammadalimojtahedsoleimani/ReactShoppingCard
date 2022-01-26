import React , { useContext } from 'react';
import { CartContext } from "../../context/CartContextProvider";
import shopIcon from "../../assets/icons/shop.svg";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"

const Navbar = () => {
    //destructure
    //chon fght state ro mikhaym gereftim hamaro lazem nist.
    const { state } = useContext ( CartContext )
    return (
        <div className={ styles.mainContainer }>
            <div className={ styles.container }>
                <Link className={ styles.productLink } to="/products">Products</Link>
                <div className={ styles.iconContainer }>
                    <Link to="/cart"><img src={ shopIcon } alt="axe"/></Link>
                    <span>{ state.itemsCounter }</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;