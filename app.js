const http = require('http');

function rqListener (req, res) {
    console.log(req.url, req.method, req.headers)

    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<body><h1>Hello from my Node.js server!</h1></body>')
    res.write('</html>')
    res.end()
}

const server = http.createServer(rqListener)

server.listen(3000)