const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_CONNECT_URI);

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email }).then((user) => {
        if (user) {
            if (user.password === password) {
                res.json("Success");
            } else {
                res.json("Password is incorrect");
            }
        } else {
            res.json("No account is registered using this email");
        }
    });
});

app.post("/register", (req, res) => {
    UserModel.create(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json(err));
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Server is running on port 3001");
});
