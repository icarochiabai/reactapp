import React from "react";
import "./style.css";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

export default function Home() {
	return (
		<>
			<div id="home" className="wrapper bg-dark">
				<Navbar />
				<div className="home-wrapper">
					<h1>
						<span className="highlight-primary-red">
							EXCELÊNCIA
						</span>
						<br />É UM{" "}
						<span className="highlight-primary-red">HÁBITO</span>
					</h1>
				</div>
			</div>
		</>
	);
}
