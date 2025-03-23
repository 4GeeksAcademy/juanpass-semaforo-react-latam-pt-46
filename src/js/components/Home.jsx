import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "../../styles/index.css";

const Home = () => {
	const [color, setColor] = useState("red");
	const [showPurple, setShowPurple] = useState(false); // <- nuevo estado

	return (
		<div id="semaforito" className="semaforito">
			<div className="barrita">
				<div id="trafficTop" className="traffic-top">
					<div
						onClick={() => setColor("red")}
						className={`light red ${color === "red" ? "active" : ""}`}
					></div>
					<div
						onClick={() => setColor("yellow")}
						className={`light yellow ${color === "yellow" ? "active" : ""}`}
					></div>
					<div
						onClick={() => setColor("green")}
						className={`light green ${color === "green" ? "active" : ""}`}
					></div>

					{showPurple && (
						<div
							onClick={() => setColor("purple")}
							className={`light purple ${color === "purple" ? "active" : ""}`}
						></div>
					)}
				</div>

				{/* Botón para activar el color púrpura */}
				{!showPurple && (
					<button
					className="add-purple-btn"
					onClick={() => {
						setShowPurple(true);
						setColor("purple"); // <- Activar color automáticamente
					}}
				>
					Agregar morado
				</button>
				
				)}
			</div>
		</div>
	);
};

export default Home;
