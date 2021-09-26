import React, { useContext } from "react";
import { PostsContext } from "../../Contexts/PostsContext";
import PostItem from "./PostItem";

const LongMetaPosts = () => {
	const [posts] = useContext(PostsContext);
	let i = 0;
	let LongMetaPosts = posts.filter((post) => {
		if (post.meta_description !== null && post.meta_description.length > 150) {
			return post;
		}
		return false;
	});
	return (
		<div className="card" style={{ margin: "10px" }}>
			<div className="card-body">
				<h5 className="card-title">Posts With Long Meta Description</h5>
				{LongMetaPosts.length === 0 ? (
					<p>No posts with Long meta Description</p>
				) : (
					LongMetaPosts.map((post) => {
						i++;
						return <PostItem key={post.id} id={i} title={post.title} url={post.url} />;
					})
				)}
			</div>
		</div>
	);
};

export default LongMetaPosts;
