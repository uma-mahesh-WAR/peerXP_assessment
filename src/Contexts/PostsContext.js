import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const PostsContext = createContext();

export const PostsProvider = (props) => {
	const [posts, setPosts] = useState([]);
	const url = "https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d&limit=all&order=published_at%20DESC";
	useEffect(() => {
		async function fetchPosts() {
			const data = await axios.get(url);
			setPosts(data.data.posts);
		}
		fetchPosts();
	}, []);
	return <PostsContext.Provider value={[posts, setPosts]}>{props.children}</PostsContext.Provider>;
};
