let p = console.log

const data = require('./personal.json')

// const key = ['Name', 'Department', 'Age' , 'Address', ]
// Feeling bore to type use this method

// const key = Object.keys(data);

// key.forEach(element => {
//     if(typeof data[element] == 'object'){
//         p(element+" : ")
//         let k = Object.keys(data[element])
//         k.forEach(ele => {
//             p("\t"+ele +" : " +data[element][ele])
//         });
//     }
//     else{


//         p(element+" : "+data[element])
//     }
// });

const re = (data,i=0)=>{
    keys = Object.keys(data)
    keys.forEach(element => {
        if(typeof data[element] == 'object'){
            p("  ".repeat(i)+element+":")
            i+=1
            re(data[element],i)
        }
        else{
            p("  ".repeat(i)+element+" : "+data[element])
        }
    });
}

re(data)

