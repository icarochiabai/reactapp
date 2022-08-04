import "./style.css";

import Coolbox from "../../components/Coolbox";

import profile from "../../assets/eu.png";

export default function About() {
	return (
		<>
			<div id="about" className="bg-img bg-about">
				<div className="wrapper-about">
					<Coolbox
						width="30%"
						barText="eu.png"
						displayImage={profile}
						media="true"
						delay="1.7s"
					/>
					<Coolbox
						width="50%"
						barText="sobre-mim.exe"
						displayText="olha isso :)"
						animate="true"
					/>
				</div>
			</div>
		</>
	);
}
