const todos = require("../Data/Todos.json");

getAllTodos = () => {
	return todos;
};

getTodosByUserID = (userID) => {
	return todos.filter((x) => x.userId == userID);
};

module.exports = { getAllTodos, getTodosByUserID };
