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
			<h2>Menu Kita</h2>
			<Food
				nama="Sate Ayam"
				deskripsi="Potongan daging ayam yang ditusuk dan dibakar, disajikan dengan bumbu kacang"
				harga={15000}
				foto="food/sate-ayam.jpg"
				stok={Math.random() >= 0.5 ? true : false}
			/>
			<Food
				nama="Sate Ayam"
				deskripsi="Potongan daging ayam yang ditusuk dan dibakar, disajikan dengan bumbu kacang"
				harga={25000}
				foto="food/nasi-goreng.jpg"
				stok={Math.random() >= 0.5 ? true : false}
			/>
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
		<footer className="footer">
			{new Date().getFullYear()} Warung Makan Rendra | Jam buka {jamBuka}{" "}
			- Jam tutup {jamTutup}
		</footer>
	);
}

function Food(props) {
	return (
		<div className="food">
			<img
				src={props.foto}
				alt={props.nama}
				width="100"
				height="70"
			/>
			<div>
				<h3>{props.nama}</h3>
				<p>{props.deskripsi}</p>
				<span>{props.harga}</span>
			</div>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
