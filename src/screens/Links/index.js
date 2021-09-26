import React, { useContext, useState } from "react";
import Header from "../../Components/CommonHeader";
import { PostsContext } from "../../Contexts/PostsContext";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import LinksCount from "./LinksCount";
import BrokenLinks from "./BrokenLinks";

const Links = () => {
	const [posts] = useContext(PostsContext);
	let alllinks = [];
	let intlinks = [];
	let extlinks = [];
	const getLinks = (str) => {
		let doc = document.createElement("html");
		doc.innerHTML = str;
		let alinks = doc.getElementsByTagName("a");
		let arlinks = doc.getElementsByTagName("area");
		for (let i = 0; i < alinks.length; i++) {
			alllinks.push(alinks[i].getAttribute("href"));
		}
		for (let i = 0; i < arlinks.length; i++) {
			alllinks.push(arlinks[i].getAttribute("href"));
		}
	};

	posts.map((post) => getLinks(post.html));
	alllinks.map((link) => {
		if (link.startsWith("https://ghost-blog.ipxp.in/")) {
			intlinks.push(link);
		} else {
			extlinks.push(link);
		}
		return false;
	});
	return (
		<div>
			<Header />
			<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
				<Masonry>
					<LinksCount total={alllinks.length} internal={intlinks.length} external={extlinks.length} />
					<BrokenLinks links={extlinks} name="External" />
					<BrokenLinks links={intlinks} name="Internal" />
				</Masonry>
			</ResponsiveMasonry>
		</div>
	);
};

export default Links;
