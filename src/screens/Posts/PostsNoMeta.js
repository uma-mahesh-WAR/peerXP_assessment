import React, { useContext } from "react";
import { PostsContext } from "../../Contexts/PostsContext";
import PostItem from "./PostItem";

const PostsNoMeta = () => {
	const [posts] = useContext(PostsContext);
	let i = 0;
	let noMetaPosts = posts.filter((post) => post.meta_description === null);
  // console.log(noMetaPosts);
	return (
		<div className="card" style={{ margin: "10px" }}>
			<div className="card-body">
				<h5 className="card-title">Posts Without Meta Description</h5>
				{noMetaPosts.length===0?<p>No posts without meta description</p>: noMetaPosts.map((post) => {
					i++;
					return <PostItem key={post.id} id={i} title={post.title} url={post.url} />;
				})}
			</div>
		</div>
	);
};

export default PostsNoMeta;
