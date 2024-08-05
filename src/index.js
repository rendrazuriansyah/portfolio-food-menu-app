import React from "react";
import ReactDOM from "react-dom/client";

function App() {
	return (
		<div>
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header() {
	return <h1>Warteg Rendra</h1>;
}

function Menu() {
	return (
		<div>
			<h2>
				<Food />
				<Food />
				<Food />
				<Food />
			</h2>
		</div>
	);
}
function Footer() {
	return <footer>{new Date().getFullYear()} Warteg Rendra</footer>;
}

function Food() {
	return (
		<div>
			<img
				src="food/soto-betawi.jpg"
				alt=""
				width="100"
				height="78"
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
