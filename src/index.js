import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data.js";
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
	const foods = data;
	const numFoods = foods.length;
	return (
		<main className="menu">
			<h2>Menu Kita</h2>
			{numFoods > 0 ? (
				<ul className="foods">
					{data.map((food, index) => (
						<Food
							foodObj={food}
							key={index}
						/>
					))}
				</ul>
			) : (
				<p>Menu sedang kosong, silahkan datang lagi besok!. 😁</p>
			)}
		</main>
	);
}
function Footer() {
	const hour = new Date().getHours();
	const jamBuka = 7;
	const jamTutup = 20;
	const isOpen = hour >= jamBuka || hour <= jamTutup;

	if (isOpen) {
		return (
			<FooterOpenHour
				jamBuka={jamBuka}
				jamTutup={jamTutup}
			/>
		);
	} else {
		return (
			<FooterCloseHour
				jamBuka={jamBuka}
				jamTutup={jamTutup}
			/>
		);
	}
}

// Parameter Destructuring
function FooterOpenHour({ jamBuka, jamTutup }) {
	return (
		<footer>
			<div className="order">
				<p>
					{new Date().getFullYear()} Warung Makan Rendra | Jam buka{" "}
					{jamBuka} - Jam tutup {jamTutup}
				</p>
				<button className="btn">Orders</button>
			</div>
		</footer>
	);
}

// Parameter Destructuring
function FooterCloseHour({ jamBuka, jamTutup }) {
	return (
		<footer className="footer">
			<p>
				Warung Makan Rendra sedang tutup. Silahkan datang besok sekitar
				jam {jamBuka}-{jamTutup}.
			</p>
		</footer>
	);
}

function Food(props) {
	// Destructuring Assignment
	const { nama, deskripsi, harga, foto, stok } = props.foodObj;
	return (
		<li className="food">
			<img
				src={foto}
				alt={nama}
				width="100"
				height="70"
			/>
			<div>
				<h3>{nama}</h3>
				<p>{deskripsi}</p>
				<span>{harga}</span>
			</div>
		</li>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
