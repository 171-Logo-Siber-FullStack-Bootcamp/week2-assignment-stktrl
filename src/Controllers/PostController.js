const posts = require("../Data/Posts.json");

getAllPosts = () => {
	return posts;
};

getPostById = (postID) => {
	return posts.filter((x) => x.id == postID);
};

module.exports = { getAllPosts, getPostById };
