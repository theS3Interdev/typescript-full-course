import { useContext } from 'react';
import CartContext from '../context/cart-provider';
import { UseCartContextType } from '../context/cart-provider';

const useCart = (): UseCartContextType => {
	return useContext(CartContext);
};

export default useCart;
