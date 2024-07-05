const Task = require("../models/Task")

const getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find({})
        return res.status(200).json({ tasks })
    }catch(err){
        return res.status(500).json({err})
        return;
    }
    return res.send("get sabai taskss")
    return;
}
const createTask = async(req, res) => {
    try{
        const task = await Task.create(req.body)
        return res.status(201).json({task})
        return;
    }catch(err){
        return res.status(500).json({msg: err})
        return;
    }
    // res.send("create euta task by")

    // res.json(req.body)
}

const getTask = async (req, res) => {
    try{
        const {tid:taskID} = req.params
        const task = await Task.findOne({ _id:taskID });

        if (!task){
            // correct syntax of id but no such id in db
            return res.status(404).json({ msg: `task with id : ${taskID} xaina houu` })
        }

        return res.status(200).json({ task })
        return;
    }
    catch(err){
        // wrong syntax of id
        return res.status(500).json({msg: err})
        return;

    }
    // res.json({ tid:req.params.tid })
}
const deleteTask = async (req, res) => {
    try{
        const {tid:taskID} = req.params
        const task = await Task.findByIdAndDelete({_id:taskID})

        if (!task){
            return res.status(404).json({ msg: `Testo ${taskID} vako task xaina houu` })
        }

        return res.status(200).json({ task })
        return;
    }
    catch(err){
        return res.status(500).json({ err })
        return;
    }
    // res.send("del euta task")
}
const updateTask = async (req, res) => {
    try{
        const {tid:taskID} = req.params

        const task = await Task.findByIdAndUpdate({ _id: taskID}, req.body,{
            new:true,
            runValidators:true
        } )
        
        if (!task){
            return res.status(404).json({ msg: `Testo ${taskID} id vako task xaina yoi` })
        }
        
        return res.status(200).json({ task })
        return;
    }catch(e){
        return res.status(500).json({e})
    }
    // res.send("update euta task")
}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    deleteTask,
    updateTask
}