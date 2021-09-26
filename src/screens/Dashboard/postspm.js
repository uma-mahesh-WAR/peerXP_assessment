import React, { useContext } from "react";
import { PostsContext } from "../../Contexts/PostsContext";
import { Bar } from "react-chartjs-2";

const PostsPM = () => {
	const [posts] = useContext(PostsContext);
	let datadate = [];
	const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const getMonthsYear = (str) => {
		let date = new Date(str);
		return { Month: monthNames[date.getMonth()], Year: date.getUTCFullYear() };
	};
	posts.map((post) => {
		datadate.push(getMonthsYear(post.published_at));
	});
	// const occ = datadate.reduce((acc, curr) => {
	// 	return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
	// }, {});
	// console.log(o);
	let counter = {};

	datadate.forEach(function (obj) {
		var key = `${obj.Month}-${obj.Year}`;
		counter[key] = (counter[key] || 0) + 1;
	});
	// console.log(counter["7-2020"])
	var raw = datadate,
		nameIndices = Object.create(null),
		YearHash = Object.create(null),
		data = { labels: [], datasets: [] };
	var colors = ["#b0e0e6", "#fbceb1"];
	let i = 0;
	raw.forEach(function (o) {
		if (!(o.Month in nameIndices)) {
			nameIndices[o.Month] = data.labels.push(o.Month) - 1;
			data.datasets.forEach(function (a) {
				a.data.push(0);
			});
		}
		if (!YearHash[o.Year]) {
			YearHash[o.Year] = {
				label: o.Year,
				backgroundColor: colors[i%2],
				data: data.labels.map(function () {
					return 0;
				}),
			};
			data.datasets.push(YearHash[o.Year]);
		}
		YearHash[o.Year].data[nameIndices[o.Month]] = counter[`${o.Month}-${o.Year}`];
    i++;
	});
	data.labels = monthNames;
	return (
		<div className="card" style={{ width: "93%", margin: "20px", height:"auto" }}>
			<div className="card-body">
				<h5 className="card-title">Posts Per Month</h5>
				<Bar data={data} />
			</div>
		</div>
	);
};

export default PostsPM;
