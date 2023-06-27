const http = require('http')
const hostname = 'localhost'
const port = 3000

const requestListener = function (request,response) {
    response.setHeader("Content-type", "text/html")
response.writeHead(200);
response.end(
    `
    <h1>Caution</h1>
    `
)
}
const server = http.createServer(requestListener);
server.listen(port,hostname,()=>{
    console.log("Server is running");
})