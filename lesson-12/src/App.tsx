import { useState } from 'react';
import Heading from './components/heading';
import Section from './components/section';
import Counter from './components/counter';

function App() {
	const [count, setCount] = useState<number>(1);

	return (
		<>
			<Heading title={'Hello'} />
			<Section title={'Different Title'}>This is my Section.</Section>
			<Counter setCount={setCount}>Count is {count}</Counter>
		</>
	);
}

export default App;
