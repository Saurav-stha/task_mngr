const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Error chai hya aucha kya"],
        trim:true,
        maxlength:[20,"Namayawa cant be more than 20"]
    },

    completed:{
        type:Boolean,
        default:false
    }
})


module.exports = mongoose.model('Task',TaskSchema)