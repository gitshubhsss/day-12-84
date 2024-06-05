const express=require("express");
const app=express();
const port=8080;

const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
const { v4: uuidv4 } = require("uuid");


app.listen(port,()=>{
    console.log("app is listening on the port 8080");
})

//database
const posts = [
    {
      id: uuidv4(),
      username: "apana collage",
      content: "This is the best platform to learn the coding !",
    },
    {
      id: uuidv4(),
      username: "shubhamranjane",
      content:
        "the sky is in your palm and when you open your palm the sky is not limit !",
    },
    {
      id: uuidv4(),
      username: "ashish ranjane",
      content: "consistency is the key of success !",
    },
  ];

app.get("/posts",(req,res)=>{//here the home route
   res.render("index.ejs",{posts});
})
app.get("/posts/new",(req,res)=>{
  res.render("newPost.ejs");
});
app.post("/posts",(req,res)=>{
  let {username,content}=req.body;
  let id=uuidv4();
  posts.push({username,content,id});
  res.redirect("/posts")
})