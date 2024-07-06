const { connect } = require('mongoose');

const connectdb =async (url) =>{
    try{
        await connect(url);
    }catch(err){
        console.log(err);
    }
}

module.exports = connectdb;