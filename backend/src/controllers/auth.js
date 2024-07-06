const { Router } = require('express');
const userModel = require('../models/users');

const authRouter = Router();

authRouter.post('/signup', async (req, res) => {
    try {
        const user = new userModel(req.body);
        const savedUser = await user.save();
        return res.status(201).send({ message: 'Sign up successfully!', token: 12345, ...savedUser.toObject() });
    } catch (err) {
        return res.status(500).send({ message: 'Error Occurred' });
    }
});

authRouter.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const validUser = await userModel.findOne({ username, password });
        if (validUser) {
            return res.send(validUser);
        } else {
            return res.status(401).send({ message: 'Invalid username or password' });
        }
    } catch (err) {
        return res.status(500).send({ message: 'Error Occurred' });
    }
});

module.exports = authRouter;
