import React , { useEffect , useState } from 'react';
//API
import { getProducts } from "../Services/api";

export const ProductsContext = React.createContext ();

const ProductContextProvider = ( { children } ) => {
    const [ products , setProducts ] = useState ( [] );
    //funci ke tarif mikoni age dakhel useeffect mikhad estefade beshe hamon dakhel tarif kon
    useEffect ( () => {
        //chon khodesh dare az async estefade mikone bayad async tarif beshe ke be moshkel nakhore
        const fetchAPI = async () => {
            //sabr kone aval info beyad bad ejra she age aval ejra she khali meghdar dahi mishe
            setProducts ( await getProducts () );
        }

        fetchAPI ();
    } , [] )

    return (
        <ProductsContext.Provider value={ products }>
            { children }
        </ProductsContext.Provider>
    );
};

export default ProductContextProvider;