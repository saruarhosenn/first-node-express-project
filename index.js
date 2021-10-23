const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
// const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("hello world!");
});

const users = [
	{id: 0, name: "Saruar", email: "saruar@gmail.com", phone: "01750875754768"},
	{id: 1, name: "Rasel", email: "rasel@gmail.com", phone: "01750875754768"},
	{id: 2, name: "Josim", email: "josim@gmail.com", phone: "01750875754768"},
	{id: 3, name: "Suhan", email: "suhan@gmail.com", phone: "01750875754768"},
	{id: 4, name: "Pabel", email: "pabel@gmail.com", phone: "01750875754768"},
];

app.get("/user", (req, res) => {
	const search = req.query.search;
	if (search) {
		const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
		res.send(searchResult);
	} else {
		res.send(users);
	};
});

// app.Method
app.post("/user", (req, res) => {
	console.log("Hitting the post", req.body);
	const newUser = req.body;
	newUser.id = users.length;
	users.push(newUser);
	// res.send(JSON.stringify(newUser));
	res.json(newUser);
});

app.get("/user/:userID", (req, res) => {
	const id = req.params.userID;
	const user = users[id];
	res.send(user);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});