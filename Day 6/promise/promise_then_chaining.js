const fs = require('fs');

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

function write(path,data) {
    return new Promise((resolve,reject)=>{
        fs.writeFile(path,data,(err)=>{
            if(err){
                reject("Something went wrong");
            }
            else{
                resolve("Done uhh");
            }
        }) 
    })
}

read(`${__dirname}/sample.txt`)
.then((data)=>{
    console.log(data.toString());
    return write(`${__dirname}/sample.txt`,'Sakthi santhosh');
})
.then((wdata)=>{
    console.log(wdata);
})
.catch((err)=>{
    console.log(err);
})
