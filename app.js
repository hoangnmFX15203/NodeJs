const express = require('express')
const app = express()
const port = 3000

app.use ('/users', (req, res) => {
  res.send('<p>The Middleware that handles just /</p>')
})

app.use ('/', (req, res) => {
  res.send('<p>The Middleware that handles just /users</p>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})