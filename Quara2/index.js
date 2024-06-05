const express = require("express");
const app = express();
const port = 8080;

const path = require("path");

const { v4: uuidv4 } = require("uuid");
// uuidv4(); funtion is used to create the random ids

app.use(express.static(path.join(__dirname, "/public/css"))); //to access the public folder from parent folder
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//we cant send PATCH OR PUT OR DELETE requrest dereclty from the client side
//for that matter we istall the method_override package

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.listen(port, () => {
  console.log(`app is listening on the port ${port}`);
});

//database
let posts = [
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
//main page
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

//adding new post
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  let data = { id, username, content };
  posts.push(data);
  res.redirect("/posts");
});

//see the post in detail

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  //so on the basic of this id we are going to find the whole post
  //for that matter wi will use Array.find method

  let post = posts.find((po) => {
    return id === po.id;
  });
  res.render("show.ejs", { post });
});

//so far we have seen how to add a new post how to see the post
//now we can see how we can edit post fot that we can use two request methods
//PATCH OR PUT

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((po) => {
    return id === po.id;
  });
  res.render("edit.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((po) => {
    return id === po.id;
  });
  //now will set the post content to new content
  post.content = newContent;
  console.log(post);
  res.redirect("/posts");
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  // let post=posts.find((po)=>{
  //   return id===po.id;
  // })
  // let idx=posts.indexOf(post);
  // posts.splice(idx,1);

  posts = posts.filter((po) => {
   return id !== po.id;
  });
  res.redirect("/posts");
});
