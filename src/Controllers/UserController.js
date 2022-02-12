const users = require("../Data/Users.json");

getAllUsers = () => {
	return users;
};

getUserById = (userID) => {
	return users.filter((x) => x.id == userID);
};

module.exports = { getAllUsers, getUserById };
