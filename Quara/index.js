const express = require("express");
const app = express();
const port = 8080;

const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); //to access the view files from the parent folder

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public/css"))); //to asscees the public folder from its parent folder

//creating random ids 
const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

app.listen(port, () => {
  console.log(`app is listening on the port ${port}`);
});

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

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id=uuidv4();
  let data = { username, content ,id};
  
  posts.push(data);
  res.redirect("/posts");
});

//as soon as user clicks on view post

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => {
    return id === p.id;
  });
  res.render("show.ejs",{post});
});
