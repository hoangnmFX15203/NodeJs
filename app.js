const http = require('http');
const fs = require('fs');

function rqListener (req, res) {
    const url = req.url
    const method = req.method

    if (url === "/") {
        res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>')
    res.write('</html>')
    return res.end()
}
    if (url === "/message" && method === "POST") {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message)
        })
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
    }
    

    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<body><h1>Hello from my Node.js server!</h1></body>')
    res.write('</html>')
    res.end()
}

const server = http.createServer(rqListener)

server.listen(3000)