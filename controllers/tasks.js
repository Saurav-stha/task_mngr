const Task = require("../models/Task")

const getAllTasks = (req, res) => {
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

const getTask = (req, res) => {
    res.json({tid:req.params.tid})
}
const deleteTask = (req, res) => {
    res.send("del euta task")
}
const updateTask = (req, res) => {
    res.send("update euta task")
}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    deleteTask,
    updateTask
}