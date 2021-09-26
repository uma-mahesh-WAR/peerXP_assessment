import React from "react";

const LinksCount = (props) => {
	return (
		<div className="card" style={{ margin: "10px" }}>
			<div className="card-body">
				<h5 className="card-title">Total Links</h5>
        <p style={{fontSize:"18px"}}>{props.total}</p>
        <h5 className="card-title">Number of Internal Links</h5>
        <p style={{fontSize:"18px"}}>{props.internal}</p>
        <h5 className="card-title">Number of External Links</h5>
        <p style={{fontSize:"18px"}}>{props.external}</p>
			</div>
		</div>
	);
};

export default LinksCount;
