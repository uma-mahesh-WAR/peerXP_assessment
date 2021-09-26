import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div style={{ marginBottom: "20px" }}>
			<ul className="bg-light nav justify-content-end">
				<li className="nav-item">
					<Link className="nav-link" to="/">
						Home
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Header;
