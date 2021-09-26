import React, { useContext } from "react";
import { PostsContext } from "../../Contexts/PostsContext";
import PostItem from "./PostItem";
import wordCount from "./HTMLwordCount";

const LongPosts = () => {
	const [posts] = useContext(PostsContext);
	let i = 0;
	let LongPosts = posts.filter((post) => {
		if (post.html !== null && wordCount(post.html) > 1500) {
			return post;
		}
		return false;
	});
	// console.log(posts);
	return (
		<div className="card" style={{ margin: "10px" }}>
			<div className="card-body">
				<h5 className="card-title">Too Long Posts</h5>
				{LongPosts.length === 0 ? (
					<p>No Long posts</p>
				) : (
					LongPosts.map((post) => {
						i++;
						return <PostItem key={post.id} id={i} title={post.title} url={post.url} />;
					})
				)}
			</div>
		</div>
	);
};

export default LongPosts;
