const fs = require('fs')
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

write(`${__dirname}/sample.txt`,'Sakthi santhosh')
.then((data)=>{
    console.log(data.toString());
})
.catch((err)=>{
    console.log(err);
})
