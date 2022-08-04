import React from "react";
import "./style.css";

import GithubIcon from "../../assets/icons/github.svg";
import InstaIcon from "../../assets/icons/insta.svg";
import LinkedinIcon from "../../assets/icons/linkedin.svg";
import WaIcon from "../../assets/icons/wa.svg";

export default function Navbar(props) {
	console.log(props);

	return (
		<>
			<div
				className="coolbox-container"
				style={{ width: props.width, animationDelay: props.delay }}
			>
				<div className="bar">
					<h1>{props.barText}</h1>
					<div className="circles">
						<div className="circle bg-red"></div>
						<div className="circle bg-yellow"></div>
						<div className="circle bg-green"></div>
					</div>
				</div>
				<div
					className="text-display"
					style={props.animate == undefined ? { height: "60vh" } : {}}
				>
					{props.displayText != undefined ? (
						<div className="terminal-display">
							<h2>
								> Oi, eu sou o Ícaro!{" "}
								<span className="rotate">👋</span>
							</h2>
							<p>
								{" "}
								Ainda estou desenvolvendo o site, aqui
								futuramente será um terminal interativo! <br />{" "}
								( Tentei agora mas deu alguns problemas de
								formatação :/ )
							</p>
						</div>
					) : (
						<div
							className="portrait"
							style={
								props.media == "true"
									? { justifyContent: "space-evenly" }
									: { justifyContent: "center" }
							}
						>
							{props.media == "true" ? (
								<>
									<img
										src={props.displayImage}
										style={{ width: "50%" }}
									></img>
									<div className="social-media">
										<ul>
											<li>
												<a
													href="https://www.github.com/icarochiabai/"
													target="_"
												>
													<img
														src={GithubIcon}
														alt=""
														srcset=""
													/>
												</a>
											</li>
											<li>
												<a
													href="https://www.linkedin.com/in/icarochiabai/"
													target="_"
												>
													<img
														src={LinkedinIcon}
														alt=""
														srcset=""
													/>
												</a>
											</li>
											<li>
												<a
													href="https://api.whatsapp.com/send?phone=+5127995190763&text=Oi!%20Vim%20pelo%20seu%20site,%20gostaria%20de%20trabalhar%20com%20voc%C3%AA!"
													target="_"
												>
													<img
														src={WaIcon}
														alt=""
														srcset=""
													/>
												</a>
											</li>
											<li>
												<a
													href="https://www.instagram.com/chiabaiicaro/"
													target="_"
												>
													<img
														src={InstaIcon}
														alt=""
														srcset=""
													/>
												</a>
											</li>
										</ul>
									</div>
								</>
							) : (
								<img
									src={props.displayImage}
									style={{ width: "100%" }}
								></img>
							)}
						</div>
					)}
				</div>
			</div>
		</>
	);
}
