const express = require('express');
const app = express();
const port = 3000;

// Define a helloworld
app.get('/', (req, res) => {
    const re = (data,i=0)=>{
        keys = Object.keys(data)
        keys.forEach(element => {
            if(typeof data[element] == 'object'){
                res.send("  ".repeat(i)+element+":")
                i+=1
                re(data[element],i)
            }
            else{
                res.send("  ".repeat(i)+element+" : "+data[element])
            }
        });
    }
    re(data)
});
             
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

