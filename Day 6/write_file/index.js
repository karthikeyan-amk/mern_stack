const fs = require('fs')

let data = "Sakthi santhosh is a boy";

function stringToBinary(str) {
    let binary = '';
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      const binaryCode = charCode.toString(2);
      binary += binaryCode.padStart(8, '0'); // Pad with leading zeros to ensure 8 digits
    }
    return binary;
}
function binaryToString(binary) {
  let str = '';
  for (let i = 0; i < binary.length; i += 8) {
    const binarySegment = binary.substr(i, 8);
    const decimalValue = parseInt(binarySegment, 2);
    const character = String.fromCharCode(decimalValue);
    str += character;
  }
  return str;
}
data = stringToBinary(data)
fs.writeFile(`${__dirname}/friends.txt`,data,(err)=>{
    if(err){
        console.log("Something went wrong");
    }
    else{
        console.log("Done uhh");
    }
})

fs.readFile(`${__dirname}/friends.txt`,(err,data)=>{
    data = data.toString();
    console.log(binaryToString(data));
})



