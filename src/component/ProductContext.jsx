import { createContext, useState } from "react";
import allProducts from "./AllProduct.jsx"; 

export const ProductContext = createContext(); 

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(allProducts); 

  const addProduct = (newProduct) => {
    console.log(newProduct)
    // setProducts((prevProducts) => [...prevProducts, newProduct]); 
    //  console.log(products)

    //  allProducts.push(newProduct)
    allProducts.push(newProduct);
    console.log('product added')

  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
