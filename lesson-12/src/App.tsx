import { useState } from 'react';
import Heading from './components/heading';
import Section from './components/section';
import Counter from './components/counter';
import List from './components/list';

function App() {
	const [count, setCount] = useState<number>(1);

	return (
		<>
			<Heading title={'Hello'} />
			<Section title={'Different Title'}>This is my Section.</Section>
			<Counter setCount={setCount}>Count is {count}</Counter>
			<List
				items={['☕ Coffee', '🌮 Tacos', '💻 Code']}
				render={(item: string) => <span className="bold">{item}</span>}
			/>
		</>
	);
}

export default App;
