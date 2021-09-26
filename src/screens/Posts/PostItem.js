import React from "react";

const PostItem = (props) => {
	return (
		<div className="card-body" style={{ display: "grid",gridTemplateColumns:"11% 80% 9%", alignItems: "center", padding: "5px" }}>
			<div style={{ fontSize: "25px", }}>{props.id}</div>
			<div style={{ fontSize: "15px" }}>{props.title}</div>
      <a href={props.url} target="_blank" style={{textDecoration:"none",color:"black"}}><i className="icon-share-alt"></i></a>
		</div>
	);
};

export default PostItem;
