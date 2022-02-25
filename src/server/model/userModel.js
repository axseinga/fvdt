const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

const genderList = ["Gender 1", "Gender 2", "Gender 3"];

class User extends Model {}

User.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 2,
            },
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 2,
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
            },
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [genderList],
            },
        },
        dob: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isDate: true,
            },
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 10,
            },
        },
    },
    {
        sequelize,
        modelName: "user",
        timestamps: false,
    }
);

module.exports = User;
