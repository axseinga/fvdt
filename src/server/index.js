const express = require("express");
const sequelize = require("./database");
const User = require("./model/userModel");

sequelize.sync().then(() => console.log("db created"));

const app = express();
app.use(express.json());

const port = 3001;

app.get("/users", async (req, res) => {
    const users = await User.findAll();
    res.send(users);
});

app.post("/users", async (req, res) => {
    await User.create(req.body);
    res.send("user created");
});

app.get("/users/:id", async (req, res) => {
    const reqId = req.params.id;
    const user = await User.findOne({ where: { id: reqId } });
    res.send(user);
});

app.put("/users/:id", async (req, res) => {
    const reqId = req.params.id;
    await User.destroy({ where: { id: reqId } });
    res.send("user removed");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
