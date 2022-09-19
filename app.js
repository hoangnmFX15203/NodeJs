const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const usersRouter = require('./routes/users')

// app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use(usersRouter)

app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})