import Projects from "../../pages/Projects/Projects";
import "./style.css";

export default function ProjectCard(props) {
	return (
		<>
			<div
				className="coolbox-container project-card"
				style={{ height: props.height, width: props.width }}
			>
				<div className="bar">
					<h1>
						<a href={props.link} target="_">
							{props.title}
						</a>
					</h1>

					<div className="circles">
						<div className="circle bg-red"></div>
						<div className="circle bg-yellow"></div>
						<div className="circle bg-green"></div>
					</div>
				</div>
				<div className="text-display project-card-info">
					<p>{props.description}</p>
					<div className="tools-info">
						<h2>Ferramentas utilizadas</h2>
						<div className="tools-display">
							<p>{props.tools}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
