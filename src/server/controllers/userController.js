const User = require("../model/userModel");

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({
            success: true,
            data: { users },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Server error",
        });
    }
};

exports.createUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.status(201).json({
            success: true,
            msg: "User created",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Server error",
        });
    }
};

exports.getUser = async (req, res) => {
    try {
        const reqId = req.params.id;
        const user = await User.findOne({ where: { id: reqId } });
        res.status(200).json({
            success: true,
            data: { user },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Server error",
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const reqId = req.params.id;
        await User.destroy({ where: { id: reqId } });
        res.status(204).json({
            success: true,
            data: {},
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Server error",
        });
    }
};
