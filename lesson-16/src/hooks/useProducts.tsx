import { useContext } from 'react';
import ProductsContext from '../context/products-provider';
import { UseProductsContextType } from '../context/products-provider';

const useProducts = (): UseProductsContextType => {
	return useContext(ProductsContext);
};

export default useProducts;
