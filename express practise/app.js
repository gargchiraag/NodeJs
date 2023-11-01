const express=require("express")
const app=express();
const port=3030;
app.get("/",(req,res)=>{
    res.send("Hello world");
})
app.get("/contact",(req,res)=>{
    res.send("you are at contact page");
})
app.get("/view",(req,res)=>{
    res.send("you are at VIEW USER page");
})
app.post("/page-post",(req,res)=>{
    res.send("This is a POST request");
})
app.patch("/page-patch",(req,res)=>{
    res.send("This is a patch request");
})
app.delete("/page-delete",(req,res)=>{
    res.send("This is a delete request");
})
app.listen(port,()=>{
    console.log(`Server is running at PORT: ${port}`);
})