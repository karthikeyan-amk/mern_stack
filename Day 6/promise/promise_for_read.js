const fs = require('fs')
function read(path) {
    return new Promise((resolve,reject)=>{
        fs.readFile(path,(err,data)=>{
            if(err){
                reject("ERRRRROR");
            }
            else{
                resolve(data);
            }
        })
    })
}

read(`${__dirname}/sample.txt`)
.then((data)=>{
    console.log(data.toString());
})
.catch((err)=>{
    console.log(err);
})
