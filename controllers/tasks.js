
const getAllTasks = (req, res) => {
    res.send("get sabai taskss")
}
const createTask = (req, res) => {
    // res.send("create euta task by")
    res.json(req.body)
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