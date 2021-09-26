import React from "react";
import Header from "../../Components/CommonHeader";
import PostsNoMeta from "./PostsNoMeta";
import LongMetaPosts from "./PostsLongMeta";
import LongURLPosts from "./PostsLongURL";
import NoFtdImage from "./PostsNoFImage";
import ShortPosts from "./PostsShort";
import LongPosts from "./PostsLong";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Posts = () => {
	return (
		<div>
			<Header />
			<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
				<Masonry>
					<PostsNoMeta />
					<LongMetaPosts />
					<LongURLPosts />
					<NoFtdImage/>
					<ShortPosts/>
					<LongPosts/>
				</Masonry>
			</ResponsiveMasonry>
		</div>
	);
};

export default Posts;
