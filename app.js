const express = require("express");
const cors = require("cors");

const userController = require("./src/Controllers/UserController");
const postController = require("./src/Controllers/PostController");
const todosController = require("./src/Controllers/TodoController");

const app = express();
app.use(cors());
const PORT = 5000;
app.listen(PORT);
console.log(`Server ${PORT} portundunan dinleme yapıyor...`);

// ---> /users ---> get all users
// ---> /users?userID=15  get user by UserID
app.get("/users", (req, res) => {
	let response;
	if (req.query.userID) {
		response = userController.getUserById(req.query.userID);
	} else {
		response = userController.getAllUsers();
	}
	res.send(response);
	res.end();
});
// ---> /posts ---> get all posts
// ---> /posts?postID=15  get post by postID
app.get("/posts", (req, res) => {
	let response;
	if (req.query.postID) {
		response = postController.getPostById(req.query.postID);
	} else {
		response = postController.getAllPosts();
	}
	res.send(response);
	res.end();
});
// ---> /todos ---> get all todos
// ---> /todos?userID=15  get todos by UserID
app.get("/todos", (req, res) => {
	let response;
	if (req.query.userID) {
		response = todosController.getTodosByUserID(req.query.userID);
	} else {
		response = todosController.getAllTodos();
	}
	res.send(response);
	res.end();
});
