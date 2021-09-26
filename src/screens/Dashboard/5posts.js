import React, { useContext } from "react";
import { PostsContext } from "../../Contexts/PostsContext";
import styles from "./posts.module.css";

const Post = (props) => {
	return (
		<div className="col-lg-12" style={{ padding: "10px" }}>
			<div className={styles.card} style={{ padding: "10px", height: "100%",cursor:"default" }}>
				<img src={props.img}  />
				<div style={{flex:"1"}}><h5 className={`${styles.card_title} mt-3 mb-3`}>{props.title}</h5>
				{/* <p>{props.desc}</p> */}
				</div>
				<a href={props.url} target="_blank" style={{textDecoration:"None",color:"white"}}><button type="button" className={styles.read_more_btn} style={{flex:"1"}}>
					Read More
				</button></a>
			</div>
		</div>
	);
};

const Posts = () => {
	const [posts] = useContext(PostsContext);
	const postsfive = posts.slice(0, 5);
	return (
		<div className="card" style={{ flex:"1", margin: "10px",maxWidth:"655px",minWidth:"400px" }}>
			<div className="card-body">
				<h5 className="card-title">Latest 5 published Posts</h5>
				<div className="container">
					<div className="row" style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
						{postsfive.map((post) => (
							<Post key={post.id} title={post.title} img={post.feature_image} url={post.url} desc={post.meta_description} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Posts;
