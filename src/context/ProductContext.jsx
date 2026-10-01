import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const[cart,setCart]=useState([])
    const [loading,setLoading]=useState(true)
    const getProducts = async () => {
        
        try {
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();

            setProducts(data);
        } catch (error) {
            console.log(error);
        }  finally{
            setLoading(false )
        }
    };

    const addToCart=(product)=>{
        setCart([...cart,product])
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ products,loading,cart,addToCart }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;