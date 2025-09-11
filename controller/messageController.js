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

async function showMessageBoard(req,res){
        res.render("index", {title:"My mini messaging board", messages})

}

async function addMessage(req,res) {
  
    msg = req.body
    console.log(msg)
    msg['added'] = new Date()
    console.log(req.body)
    messages.push({user: req.body.user, text:req.body.text, added:new Date()})
    res.redirect("/")

}

module.exports={
    showMessageBoard,
    addMessage
}