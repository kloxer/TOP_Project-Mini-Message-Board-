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

indexRouter.post("/new", (req,res)=>{
    msg = req.body
    console.log(msg)
    msg['added'] = new Date()
    console.log(req.body)
    messages.push({user: req.body.user, text:req.body.text, added:new Date()})
    res.redirect("/")
})

module.exports = indexRouter;
