import React, { useContext, useEffect, useState } from "react";
import Header from "../../Components/CommonHeader";
import { PostsContext } from "../../Contexts/PostsContext";
import axios from "axios";
import Count from "./Count";
import Posts from "./5posts";
import PostsPM from "./postspm";

const Dashboard = () => {
	const [posts] = useContext(PostsContext);
	const [authors, setAuthors] = useState([]);
	const [tags, setTags] = useState([]);
	const [pages, setPages] = useState([]);
	useEffect(() => {
		async function fetchdata() {
			let data = await axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/authors/?key=8196190b08906dda0ebf6e6f5d&limit=all");
			setAuthors(data.data.authors);
			data = await axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/pages/?key=8196190b08906dda0ebf6e6f5d&limit=all");
			setPages(data.data.pages);
			data = await axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/tags/?key=8196190b08906dda0ebf6e6f5d&limit=all");
			setTags(data.data.tags);
		}
		fetchdata();
	}, []);
	// console.log(posts);
	// console.log(authors);
	// console.log(pages);
	// console.log(tags);
	return (
		<div>
			<Header />
			<div style={{ display: "flex",flexWrap:"wrap",justifyContent:"space-between" }}>
				<Posts />
				<div style={{ flex:"1", display: "flex", flexDirection: "column", justifyContent: "center",maxWidth:"655px",minWidth:"400px" }}>
					<div className="row">
						<Count name="Posts" count={posts.length} icon={<i className="icon-note primary font-large-2 float-left"></i>} />
						<Count name="Pages" count={pages.length} icon={<i className="icon-book-open primary font-large-2 float-right"></i>} />
					</div>
					<div className="row">
						<Count name="Authors" count={authors.length} icon={<i className="icon-user success font-large-2 float-right"></i>} />
						<Count name="Tags" count={tags.length} icon={<i className="icon-tag danger font-large-2 float-left"></i>} />
					</div>
					<PostsPM />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
