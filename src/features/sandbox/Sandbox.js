import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { increment, decrement } from './testReducer';

const Sandbox = () => {
	const data = useSelector((state) => state.test.data);
	const dispatch = useDispatch();

	return (
		<>
			<h1>Sandbox</h1>
			<h3>The data is: {data}</h3>

			<Button
				content='Increment'
				color='green'
				onClick={() => dispatch(increment(20))}
			/>
			<Button
				content='Decrement'
				color='red'
				onClick={() => dispatch(decrement(10))}
			/>
		</>
	);
};

export default Sandbox;
