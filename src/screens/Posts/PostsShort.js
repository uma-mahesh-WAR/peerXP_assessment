import React, { useContext } from "react";
import { PostsContext } from "../../Contexts/PostsContext";
import PostItem from "./PostItem";
import wordCount from "./HTMLwordCount";

const ShortPosts = () => {
	const [posts] = useContext(PostsContext);
	let i = 0;
	let ShortPosts = posts.filter((post) => {
		if (post.html !== null && wordCount(post.html) < 250) {
			return post;
		}
		return false;
	});
	// console.log(ShortPosts);
	return (
		<div className="card" style={{ margin: "10px" }}>
			<div className="card-body">
				<h5 className="card-title">Too Short Posts</h5>
				{ShortPosts.length === 0 ? (
					<p>No posts Short posts</p>
				) : (
					ShortPosts.map((post) => {
						i++;
						return <PostItem key={post.id} id={i} title={post.title} url={post.url} />;
					})
				)}
			</div>
		</div>
	);
};

export default ShortPosts;
