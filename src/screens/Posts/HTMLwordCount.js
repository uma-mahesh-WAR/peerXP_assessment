const wordCount = (str) => {
	let cont = str;
	cont = cont.replace(/<[^>]*>/g, " ");
	cont = cont.replace(/\s+/g, " ");
	cont = cont.trim();
	return cont.split(" ").length;
};

export default wordCount;
