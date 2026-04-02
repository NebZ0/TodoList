const path = require("path");

const fs = require("fs");

const pathfile = path.join(__dirname, "datas", "tasks.json");


exports.getAll = (req, res)=>{
    const data = fs.readFileSync(pathfile);
    const tasks = JSON.parse(data);
    let tasksShowed = tasks;
    if(req.query.state == "done"){
        tasksShowed = tasks.filter(task => task.completed)
    }
    else{if(req.query.state == "pending"){
        tasksShowed = tasks.filter(task => !task.completed)
    }}
    res.json(tasksShowed);
}

exports.addTask = (req, res)=>{
    const data = fs.readFileSync(pathfile);
    const tasks = JSON.parse(data);

    let {title, completed} = req.body;
    
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const task = {id, title, completed};
    tasks.push(task)
    fs.writeFileSync(pathfile,JSON.stringify(tasks, null, 2))

    res.status(201).json(task);
}

exports.taskDone = (req,res,next)=>{
    const data = fs.readFileSync(pathfile);
    const tasks = JSON.parse(data);

    const id = Number(req.params.id);
    const taskFound = tasks.find(task => task.id === id);

    if(taskFound === undefined){
        const err = new Error("id de tache inconnu");
        err.status = 400;
        return next(err);
    }

    taskFound.completed = !taskFound.completed;
    
    fs.writeFileSync(pathfile,JSON.stringify(tasks, null, 2))

    res.status(200).json(taskFound);
}