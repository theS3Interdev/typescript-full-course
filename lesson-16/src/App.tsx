import { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Cart from './components/cart';
import ProductList from './components/product-list';

function App() {
	const [viewCart, setViewCart] = useState<boolean>(false);

	const pageContent = viewCart ? <Cart /> : <ProductList />;

	const content = (
		<>
			<Header viewCart={viewCart} setViewCart={setViewCart} />

			{pageContent}

			<Footer viewCart={viewCart} />
		</>
	);

	return content;
}

export default App;
