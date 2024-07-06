const { Router } =  require('express');
const userModel = require('../models/users');

const userRoute = Router();

userRoute.get('/:userId', async (req, res) =>{
    const {userId} = req.params;
    const user = await userModel.findById(userId);
    if(user){
        res.send(user);
    }else{
        res.status(404).send({message : "User not found"});
    }
})

module.exports = userRoute;