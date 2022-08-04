import Projects from "../../pages/Projects/Projects";
import "./style.css";

export default function ProjectCard() {
	const reposURL = "https://api.github.com/users/icarochiabai/repos";
	async function getRepos(url) {
		let repos = await fetch(url).then((repos) => repos.json());
		let portRepos = [];
		for (let repo of repos) {
			if (
				repo.description != null &&
				repo.description.includes("<PORTFOLIO>") &&
				!repo.fork
			) {
				portRepos.push(repo);
			}
		}

		return portRepos;
	}

	getRepos(reposURL).then((repo) => console.log(repo));
}
