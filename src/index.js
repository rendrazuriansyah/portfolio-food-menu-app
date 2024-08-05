import React from "react";
import ReactDOM from "react-dom/client";

function App() {
	return (
		<div>
			<h1>Hello world</h1>
			<Food />
		</div>
	);
}

function Food() {
	return (
		<div>
			<img
				src="food/soto-betawi.jpg"
				alt=""
			/>
			<h2>Soto Betawi</h2>
			<p>Soto betawi dari Jakarta</p>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
