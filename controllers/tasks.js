const Task = require("../models/Task")

const getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find({})
        return res.status(200).json({ tasks })
        // return res.status(200).json({ tasks, nbHits: tasks.length })
        // return res.status(200).json({ success: true , nbHits: tasks.length })

    }catch(err){
        return res.status(500).json({err})
        
    }
    // return res.send("get sabai taskss")
    
}
const createTask = async(req, res) => {
    try{
        const task = await Task.create(req.body)
        return res.status(201).json({task})
        
    }catch(err){
        return res.status(500).json({msg: err})
        
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
        
    }
    catch(err){
        // wrong syntax of id
        return res.status(500).json({msg: err})
        

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
        
    }
    catch(err){
        return res.status(500).json({ err })
        
    }
    // res.send("del euta task")
}

// patch = updates the only thing changed
// put = updates the changed value and sets others to default

/////patch
const updateTask = async (req, res) => {
    try{
        const {tid:taskID} = req.params

        const task = await Task.findByIdAndUpdate({ _id: taskID}, req.body,{
            new:true, // gives new updated value in const "task"
            runValidators:true // check for validation in schema
        } )
        
        if (!task){
            return res.status(404).json({ msg: `Testo ${taskID} id vako task xaina yoi` })
        }
        
        return res.status(200).json({ task })
        
    }catch(e){
        return res.status(500).json({e})
    }
    // res.send("update euta task")
}

/////put
const putTask = async (req, res) => {
    try{
        const {tid:taskID} = req.params

        const task = await Task.findByIdAndUpdate({ _id: taskID}, req.body,{
            new:true, // gives new updated value in const "task"
            runValidators:true, // check for validation in schema
            overwrite:true // only sets the changed values, others are removed
        } )
        
        if (!task){
            return res.status(404).json({ msg: `Testo ${taskID} id vako task xaina yoi` })
        }
        
        return res.status(200).json({ task })
        
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