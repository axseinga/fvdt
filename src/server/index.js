const express = require("express");
const cors = require("cors");
const sequelize = require("./database");
const router = require("./routes/userRoutes");

sequelize.sync().then(() => console.log("db created"));

const app = express();
app.use(express.json());
app.use(
    cors({
        allowedHeaders: ["Content-Type"],
        exposedHeaders: ["Content-Type"],
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
    })
);

const port = 3001;

app.use("/users", router);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
