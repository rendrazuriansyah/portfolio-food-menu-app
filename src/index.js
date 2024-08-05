import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header() {
	const style = {
		textAlign: "center",
		fontSize: "50px",
		color: "red",
		textTransform: "uppercase",
	};
	return <h1 style={style}>Warung Makan Rendra</h1>;
}

function Menu() {
	return (
		<main className="menu">
			<h2>
				<Food />
				<Food />
				<Food />
				<Food />
			</h2>
		</main>
	);
}
function Footer() {
	const hour = new Date().getHours();
	const jamBuka = 10;
	const jamTutup = 22;

	if (hour < jamBuka || hour > jamTutup) {
		alert("Warung Makan Rendra sedang tutup");
	} else {
		alert("Warung Makan Rendra sedang buka");
	}

	return (
		<footer>
			{new Date().getFullYear()} Warung Makan Rendra | Jam buka {jamBuka}{" "}
			- Jam tutup {jamTutup}
		</footer>
	);
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
