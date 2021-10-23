const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

const users = [
  { id: 0, name: "rajib" },
  { id: 1, name: "nejam" },
  { id: 2, name: "rafiq" },
  { id: 3, name: "mithun" },
  { id: 4, name: "labanya" },
];

const fruits = [
  { id: 0, name: "mango" },
  { id: 1, name: "aam" },
  { id: 2, name: "komola" },
  { id: 3, name: "lebu" },
  { id: 4, name: "apple" },
];

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/users", (req, res) => {
  const search = req.query.search;
  //use query parameter
  if (search) {
    const seachResult = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(seachResult);
  } else {
    res.send(users);
  }
});

//app.METHOD
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);

  //   console.log("Post", req.body);
  res.json(newUser);
});

// dynamic api
app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(fruits);
});

app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("Yummi");
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
