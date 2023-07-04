import React from "react";
import "./index.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Offers from "./components/Offers";
import Plan from "./components/Plan";
import Rooms from "./components/Rooms";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<NavBar />
			<Hero />
			<Offers />
			<Plan />
			<Rooms />
			<ImageSlider />
			<Footer />
		</div>
	);
}

export default App;
