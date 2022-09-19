const express = require('express')

const path = require('path')

const router = express.Router()

router.get ('/users', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'users.html'))
  })

module.exports = router