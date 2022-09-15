import React, { useEffect } from 'react';
import './index.css';

function App() {
	const [pos, setPos] = React.useState({
		x: 0,
		y: 0,
	});
	const [count, setCount] = React.useState(0);
	useEffect(() => {
		window.addEventListener('mousemove', (e) => {
			setPos({
				x: e.clientX,
				y: e.clientY,
			});
		});
	}, [pos]);
	const countNum = (e) => {
		e.preventDefault();
		setCount((count) => count + 1);
	};
	return (
		<div>
			<div>
				<p>You clicked {count} times</p>
				<button onClick={countNum}>Click me</button>
			</div>
			<p>X position: {pos.x}</p>
			<p>Y position: {pos.y}</p>
		</div>
	);
}

export default App;
