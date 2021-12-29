const express = require("express")
const app = express();
const path = require('path')
const connectDB = require("./db")
const transactions = require('./routes/transactions')

// const morgarn = require("morgan")

connectDB();


app.use(express.json())
// if (process.env.NODE_ENV==='production'){
//     app.use(express.static('expense-trackerr/build'));

//     app.get("*",(req,res)=> res.sendFile(path.resolve(__dirname,'client','build',
//     'index.html')));
// }

// where we want to use transactopn filr
app.use("/api/v1/transactions", transactions);
app.listen(5000)