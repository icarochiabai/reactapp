import React from "react";
import ReactDOM from "react-dom/client";
import About from "./pages/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects";

import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<Home />
		<About />
		<Projects />
		<Contact />
	</>
);
