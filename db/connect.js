const mongoose = require('mongoose')


const connectDB = (url) => {
    return mongoose
        .connect(url,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useFindAndModify:false,
            useUnifiedTopology:true
        })
        .then(() => console.log('db connection successful vayo hai..'))
        .catch((e)=>console.log(e))
}

module.exports = connectDB

