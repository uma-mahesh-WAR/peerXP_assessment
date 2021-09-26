import React, { useContext } from "react";
import { PostsContext } from "../../Contexts/PostsContext";
import PostItem from "./PostItem";

const LongURLPosts = () => {
	const [posts] = useContext(PostsContext);
	let i = 0;
	let LongURLPosts = posts.filter((post) => {
		if (post.url !== null && post.url.length > 100) {
			return post;
		}
		return false;
	});
  // console.log(posts)
	return (
		<div className="card" style={{ margin: "10px" }}>
			<div className="card-body">
				<h5 className="card-title">Posts With Long URL's</h5>
				{LongURLPosts.length===0?<p>No posts with Long URL's</p>: LongURLPosts.map((post) => {
					i++;
					return <PostItem key={post.id} id={i} title={post.title} url={post.url} />;
				})}
			</div>
		</div>
	);
};

export default LongURLPosts;
