import Counter from './counter';
import { CounterProvider } from './context/counter-context';

function App() {
	return (
		<>
			<CounterProvider>
				<Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
			</CounterProvider>
		</>
	);
}

export default App;
