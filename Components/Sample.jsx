
import React from "react";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages";
//import About from "./pages/about";
//import Blogs from "./pages/blogs";
//import SignUp from "./pages/signup";
//import Contact from "./pages/contact";

function Appss() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
			
			</Routes>
		</Router>
	);
}

export default Appss;
