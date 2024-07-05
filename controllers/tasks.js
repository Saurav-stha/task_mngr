const Task = require("../models/Task")

const getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    }catch(err){
        res.status(500).json({err})
    }
    res.send("get sabai taskss")
}
const createTask = async(req, res) => {
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }catch(err){
        res.status(500).json({msg: err})
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

        res.status(200).json({ task })
    }
    catch(err){
        // wrong syntax of id
        res.status(500).json({msg: err})

    }
    // res.json({ tid:req.params.tid })
}
const deleteTask = async (req, res) => {
    try{
        const {tid:taskId} = req.params
        const task = await Task.findByIdAndDelete({_id:taskId})

        if (!task){
            return res.status(404).json({ msg: `Testo ${taskId} vako task xaina houu` })
        }

        res.status(200).json({ task })
    }
    catch(err){
        res.status(500).json({ err })
    }
    // res.send("del euta task")
}
const updateTask = async (req, res) => {
    try{
        const {tid:taskId} = req.params

        const task = await Task.findByIdAndUpdate({ _id: taskId}, req.body,{
            new:true,
            runValidators:true
        } )
        
        if (!task){
            return res.status(404).json({ msg: `Testo ${taskId} id vako task xaina yoi` })
        }
        
        res.status(200).json({ task })
    }catch(e){
        res.status(500).json({e})
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