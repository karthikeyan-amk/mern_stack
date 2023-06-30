// const express = require('express');
// const app = express();
// const port = 3000;

// // Define a helloworld
// app.get('/Sakthisanthosh', (req, res) => {
//   res.send('He loves a girl named Ragavi');
// });
// // Define a route
// app.get('/Hi', (req, res) => {
//     res.send('Hi');
//   });           

// app.get('/', (req, res) => {
//   const obj ={
//     "Name" : "Karthi",
//     "Age" : "18"
//   }
//     res.send({obj});
// });           
// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// 
// FILE :::::::::::::


// const express = require('express');
// const path = require("path")
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   const filePath = __dirname + '/index.html';
//   res.sendFile(filePath);
// });           
// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

//
// 

// DO ALL METHOD


// const express = require('express');
// const path = require("path")
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send("GET")
// });   
// app.put('/', (req, res) => {
//   res.send("put")
// });  
// app.listen('/', (req, res) => {
//   res.send("listen")
// });
// app.post('/', (req, res) => {
//   res.send("post")
// });   
// app.delete('/', (req, res) => {
//   res.send("delete")
// });   
// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


// Connect with Router

const express = require('express');
const path = require("path")
const app = express();
const port = 3000;
const router = require('./router.js')
app.use(router)
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
