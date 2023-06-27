const fs = require('fs')

fs.readFile(`${__dirname}/states.txt`,(err,data)=>
    console.log(data.toString())
)

const name = "World "
console.log(`Hello ${name} , Na tha MASK_MAN`);

// Output:
// Hello World  , Na tha MASK_MAN
// Andhra Pradesh, Arunachal Pradesh, Assam, Bihar, Chhattisgarh, Goa, Gujarat, Haryana, Himachal Pradesh, Jammu and Kashmir, Jharkhand, Karnataka, 
// Kerala, Madhya Pradesh, Maharashtra, Manipur, Meghalaya, Mizoram, Nagaland, Odisha, Punjab, Rajasthan, Sikkim, Tamil Nadu, Telangana, Tripura  

