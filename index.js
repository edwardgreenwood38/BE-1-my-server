
let http = require('http')
let server = http.createServer(function (req, res) {
  res.write('<h1 style="color: blue;">Hello FSD!</h1>')
  res.write('<p>This is part of my first web page for Node.js</p>')
  res.end()
})

server.listen(3000, function () {
  console.log('I am awake!')
})
