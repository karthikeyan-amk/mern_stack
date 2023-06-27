// Print the file content in the server
// 



const http = require('http')
const hostname = 'localhost'
const port = 3000

const fs = require('fs');
const { error } = require('console');


const requestListener = function (request,response) {
    try {
        if (request.url =='/states') {
            const states = fs.readFileSync('states.txt', 'utf8').split('\r\n');
            response.setHeader("Content-type", "application/json")
            response.writeHead(200);
            response.end(
                `
                {
                    "states" :${states}
                    "Count" : ${states.length}
                }
                `
                )
            }
        else if(request.url =='/capital'){
            const capital = fs.readFileSync('capital.txt', 'utf8').split('\r\n');
            response.setHeader("Content-type", "application/json")
            response.writeHead(200);
            response.end(
                `
                {
                    "capital" :${capital}
                    "Count" : ${capital.length}
                }
                `
                )
            }
        else{
            response.setHeader("Content-type", "text/html")
            response.writeHead(200);
            response.end(
                `
                <h1>Invalid</h1>
                `
                )
            }
        }
    catch (error) {
        console.log("Something went wrong");
    }
}

// const requestListenercapitals = function (request,response) {
//     response.setHeader("Content-type", "application/json")
// response.writeHead(200);
// response.end(
//     `
//     {
//         "states" :${states}
//         "Count" : ${states.length}
//     }
//     `
//     )
// }

const server = http.createServer(requestListener);
server.listen(port,hostname,()=>{
    console.log("Server is running");
})
