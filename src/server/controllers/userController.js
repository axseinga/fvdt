const User = require("../model/userModel");

exports.getAllUsers = async (req, res) => {
    const users = await User.findAll();
    res.send(users);
};

exports.createUser = async (req, res) => {
    await User.create(req.body);
    res.send("user created");
};

exports.getUser = async (req, res) => {
    const reqId = req.params.id;
    const user = await User.findOne({ where: { id: reqId } });
    res.send(user);
};

exports.deleteUser = async (req, res) => {
    const reqId = req.params.id;
    await User.destroy({ where: { id: reqId } });
    res.send("user removed");
};
