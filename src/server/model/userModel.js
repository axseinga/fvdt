const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class User extends Model {}

User.init(
    {
        name: {
            type: DataTypes.STRING,
        },
        surname: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
        },
        gender: {
            type: DataTypes.STRING,
        },
        dob: {
            type: DataTypes.STRING,
        },
        comment: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: "user",
        timestamps: false,
    }
);

module.exports = User;
