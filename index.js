let posts = [
    {
      id: 123,
      username: "apana collage",
      content: "This is the best platform to learn the coding !",
    },
    {
      id: 125,
      username: "shubhamranjane",
      content:
        "the sky is in your palm and when you open your palm the sky is not limit !",
    },
    {
      id: 635,
      username: "ashish ranjane",
      content: "consistency is the key of success !",
    },
  ];

  let id=123
  posts=posts.filter((po)=>{
  return id !==po.id
  })
  console.log(posts);