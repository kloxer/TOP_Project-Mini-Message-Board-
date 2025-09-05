const express= require("express")
const indexRouter = express.Router()

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

indexRouter.get("/", (req,res)=>{
    res.render("index", {title:"My mini messaging board", messages})
})

indexRouter.get("/new", (req,res)=>{
    res.send("test2")
})

module.exports = indexRouter;
