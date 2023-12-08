const User = require("../model/userModel");
const bcrypt = require('bcrypt')
const readAll = async (req, res) => {
    try {
        const userData = await User.findAll();
        res.status(200).json(userData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const insert = async (req, res) => {
    try {
        const { email, password } = req.body;
        const bcryptPassword = bcrypt.hashSync(password, 10);
        const checkData = await User.findAll({
            where: { email },
        });
        if (checkData.length > 0) {
            res.status(500).json({ message: "username/password has already in use" });
        } else {
            const result = await User.create(
                {
                    email,
                    password: bcryptPassword
                }
            )
            if (result) {
                res.status(201).json({
                    message: "user successful created"
                })
            }
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}




const deleteUser = async (req, res) => {
    try {
        const { id } = req.body;
        const result = await User.update(
            {
                status: 0
            },
            { where: { userId: id } }
        )
        if (result[0] == 1) {
            res.status(201).json({
                message: "user successful deleted"
            })
        } else {
            res.status(404).json({
                message: "user not found"
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const updateUser = async (req, res) => {
    try {
        const { id, email, password } = req.body;
        const bcryptPassword = bcrypt.hashSync(password, 10);
        const result = await User.update(
            {
                email,
                password:bcryptPassword
            },
            { where: { userId: id } }
        )
        if (result[0] == 1) {
            res.status(201).json({
                message: "user successful updated"
            })
        } else {
            res.status(404).json({
                message: "user not found"
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}



module.exports = { readAll, insert, deleteUser, updateUser };