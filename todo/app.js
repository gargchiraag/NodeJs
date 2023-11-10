const express=require("express");
const app=express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://127.0.0.1:27017/logindb").then(()=>{
    console.log("DB CONNECTED!!!!");
})
const User=mongoose.model("user",{name:String,email:String,password:String,contact:Number});
const Todo=mongoose.model("todo",{title:String,status:Boolean});
app.get("/todo",(req,res)=>{
    console.log("Todo app called")
    return res.send("Heyyy this is a todo login apis");
})
app.post("/signup",(req,res)=>{
    const userData=new User();
    userData.name=req.body.name;
    userData.email=req.body.email;
    userData.password=req.body.password;
    userData.contact=req.body.contact;
    userData.save().then((userSaved)=>{
        console.log("NEW USER SAVED");
        console.log(userSaved);
        return res.status(200).send("New User Saved!!!");
    }).catch((err)=>{
        return res.status(404).send("err");
    });
})

app.post("/addtodo",(req,res)=>{
    const addTodo=new Todo();
    addTodo.title=req.body.title;
    addTodo.status=false;
    addTodo.save().then((todo)=>{
        console.log("TODO SAVED!!!!");
        return res.status(200).send("TODO SAVED");
    }).catch((err)=>{
        console.log("error",err);
        return res.status(401).send("unable to save the new todo");
    });
})

app.get("/getTodo",(req,res)=>{
    const userId=req.body._id;
    Todo.find({ userId: userId }).then((todos)=>{
        console.log("TODOS",todo);
        return res.status(200).send("TODO FOUND!");
    }).catch((err)=>{
        console.log("Unable to find User");
        return res.status(404).send("unable to find user");
    });

})
app.listen(27017,()=>{
    console.log("Port calling over port number 27017");
})
