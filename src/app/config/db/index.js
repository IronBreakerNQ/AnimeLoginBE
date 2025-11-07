const mongoose = require('mongoose');
require('dotenv').config();

async function connect(){
    try{
        const mongodb = process.env.mongodb;
        await mongoose.connect(mongodb);
        console.log('db connect successfully!!!')
    }catch(error){
        console.log('db connect failurenpm!!!')
    }
}

module.exports = {connect};