import "./style.css";

export default function Navbar() {
	return (
		<>
			<nav className="navbar">
				<ul>
					<li>
						<a href="#about">sobre</a>
					</li>
					<li>
						<a href="#projects">projetos</a>
					</li>
					<li>
						<a href="#contact">contato</a>
					</li>
				</ul>
			</nav>
		</>
	);
}
