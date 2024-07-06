// console.log('Task Manager App')


require('dotenv').config()
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')

const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');

//middleware
app.use(express.static('./public'))
app.use(express.json())


//routes 

app.use(notFound)

app.get('/',(request,response) => {
    response.send("HELLO SUMMONERS")
})



app.get('/yolo', (req, res) =>{
    res.send('TASK MANAGERRR')
})

app.use('/api/v1/tasks', tasks)



const port = 3000 // 

const start = async() => {
    try{
        await connectDB(process.env.MONGO_URI)
        
        app.listen(port, console.log(`server listeningg on port: ${port} ...`))
    }
    catch(e){
        console.log(e)
    }   
}

start()
