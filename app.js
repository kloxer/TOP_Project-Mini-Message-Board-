const express=  require("express")

const app = express()
const port = 3003;
// Set EJS as the view engine
const path = require('path');
const indexRouter = require("./router/index")

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({enxtended:true}))

app.use("/", indexRouter)
app.listen(port, (req,res)=>{
    console.log("lsitening")
})