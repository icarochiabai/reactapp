import "./style.css";

import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function Projects() {
	async function getProjects() {
		const repos = await fetch(
			"https://api.github.com/users/icarochiabai/repos"
		).then((repos) => repos.json());
		let projects = [];

		for (let repo of repos) {
			projects.push(repo);
		}
		return projects;
	}

	let repos = getProjects();
	repos.then((data) => {
		let projects = [];
		let projectsDiv = document.getElementById("project-cards");
		const root = ReactDOM.createRoot(projectsDiv);
		for (let repo of data) {
			console.log(repo.description);
			try {
				if (repo.description.includes("<PORTFOLIO>")) {
					let repoCard = React.createElement(ProjectCard, {
						title: repo.name,
						link: repo.html_url,
						description: repo.description.replace(
							"<PORTFOLIO>",
							""
						),
						tools: repo.language,
						width: "350px",
					});
					projects.push(repoCard);
				}
			} catch {}
		}
		root.render(projects);
	});

	return (
		<>
			<div id="projects" className="bg-img bg-projects">
				<h1>Projetos</h1>
				<div id="project-cards"></div>
			</div>
		</>
	);
}
