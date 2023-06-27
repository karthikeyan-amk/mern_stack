const http = require('http')
const hostname = 'localhost'
const port = 3000

const requestListener = function (request,response) {
    response.setHeader("Content-type", "application/json")
response.writeHead(200);
response.end(
`    {
        "Name" : "Karthi",
        "Age" : "19"
    }`
)
}
const server = http.createServer(requestListener);
server.listen(port,hostname,()=>{
    console.log("Server is running");
})
