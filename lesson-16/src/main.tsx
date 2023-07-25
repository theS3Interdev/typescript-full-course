import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { CartProvider } from './context/cart-provider';
import { ProductsProvider } from './context/products-provider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ProductsProvider>
			<CartProvider>
				<App />
			</CartProvider>
		</ProductsProvider>
	</React.StrictMode>
);
