import React, { useContext } from "react";
import { PostsContext } from "../../Contexts/PostsContext";
import PostItem from "./PostItem";

const NoFtdImage = () => {
	const [posts] = useContext(PostsContext);
	let i = 0;
	let NoFtdImage = posts.filter((post) => post.feature_image === null);
	// console.log(posts);
	return (
		<div className="card" style={{ margin: "10px" }}>
			<div className="card-body">
				<h5 className="card-title">Posts Without Featured Image</h5>
				{NoFtdImage.length===0?<p>No posts without featured Imange</p>: NoFtdImage.map((post) => {
					i++;
					return <PostItem key={post.id} id={i} title={post.title} url={post.url} />;
				})}
			</div>
		</div>
	);
};

export default NoFtdImage;
