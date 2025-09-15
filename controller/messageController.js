// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date()
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date()
//   }
// ];

const db = require("../db/queries")

async function showMessageBoard(req,res){
      const messages = await db.getAllMessages();
      console.log(messages);
        res.render("index", {title:"My mini messaging board", messages})

}

async function addMessage(req,res) {

    // msg = req.body
    // console.log(msg)
    // msg['added'] = new Date()
    // console.log(req.body)
  
    // messages.push({user: req.body.user, text:req.body.text, added:new Date()})

    await db.addMesage(req.body.user, req.body.text);
    res.redirect("/")
    
}

module.exports={
    showMessageBoard,
    addMessage
}