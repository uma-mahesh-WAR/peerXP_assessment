import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className={styles.Home}>
			<ul className="bg-light nav justify-content-end">
				<li className="nav-item">
					<Link className="nav-link" to="/Dashboard">
						Dashboard
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/Posts">
						Posts
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/Links">
						Links
					</Link>
				</li>
			</ul>
			<h1 className="text-center">PeerXP Assessment</h1>
		</div>
	);
};

export default Home;
