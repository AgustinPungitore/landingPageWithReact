import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Header from "./01-navbar.jsx";
import Jumbotron from "./02-jumbotron.jsx";
import Cards from  "./03-cards.jsx";
import Footer from "./04-footer.jsx";

//create your first component
const Home = () => {
	return (
	<>
	<Header />
	<br></br>
	<div className="container">
	<Jumbotron />
	<br></br>
			<div className="row">
			<div className="col-3"><Cards/></div>
			<div className="col-3"><Cards/></div>
			<div className="col-3"><Cards/></div>
			<div className="col-3"><Cards/></div>
			</div>
			
		</div>
		<br></br>
	<Footer />
	</>
	);
	};
	
	export default Home;
	