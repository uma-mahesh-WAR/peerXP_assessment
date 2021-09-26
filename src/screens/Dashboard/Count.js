import React from "react";

const Count = (props) => {
	return (
		<div className=" col-6">
			<div className="card" style={{margin:"10px"}}>
				<div className="card-content">
					<div className="card-body">
						<div className="media d-flex">
							<div className="media-body text-left">
								<h3 className="success">{props.count}</h3>
								<span>Total {props.name}</span>
							</div>
							<div className="align-self-center">{props.icon}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Count;
