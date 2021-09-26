import React, { useState, useEffect } from "react";
import LinkItem from "./LinkItem";
import Loader from "react-loader-spinner"

const BrokenLinks = (props) => {
	const [brknlinks, setBrknLiks] = useState([""]);
	const [fetchprogress, setfetchprogress] = useState(true);
	let bl = [];
	useEffect(() => {
		setfetchprogress(true);
		async function fetchAll() {
			await Promise.all(
				props.links.map((url) =>
					fetch(url)
						.then((r) => {
							if (r.status > 300) {
								bl.push(url);
							}
						})
						.catch((e) => {
							if (e) {
								bl.push(url);
							}
						})
				)
			);
			setfetchprogress(false);
			setBrknLiks(bl);
		}
		fetchAll();
	}, [props.links]);
	let a = 0;
	return (
		<div className="card" style={{ margin: "10px" }}>
			<div className="card-body">
				<h5 className="card-title">Broken {props.name} links</h5>
				{fetchprogress ? (
					<div style={{display:"flex",justifyContent:"center"}}><p style={{margin:"0 10px 0 0"}}>Checking for Broken Links</p><Loader type="BallTriangle" color="black" height="25px" width="25px" /></div>
				) : brknlinks.length !== 0 ? (
					brknlinks.map((link) => {
						a++;
						return <LinkItem key={a} id={a} url={link} />;
					})
				) : (
					<p>No Broken {props.name} links</p>
				)}
			</div>
		</div>
	);
};

export default BrokenLinks;
