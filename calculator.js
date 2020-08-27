const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded())

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html")
})

app.listen(3000)
