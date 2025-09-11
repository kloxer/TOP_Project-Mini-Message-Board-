const express= require("express")
const indexRouter = express.Router()


const messageController = require("../controller/messageController")
indexRouter.get("/", messageController.showMessageBoard)

indexRouter.post("/new", messageController.addMessage)

module.exports = indexRouter;
