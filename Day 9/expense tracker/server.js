const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose')
const router = require('./router.js')

// Middleware

app.use(express.json()) //to convert body pharse to json
app.use(express.urlencoded({extended:true})) //Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
app.use(router) // to connect to router


mongoose.connect("mongodb://127.0.0.1:27017/expense_tracker",{
  useUnifiedTopology : true,
  useNewUrlParser: true,
}).then(()=>console.log("Connected to DB"))
app.get('/', (req, res) => {
  res.send("GET")
});  



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});