const express = require('express')
let cors = require('cors')
const app = express()
const port = 8080

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dog', (req, res) => {
  res.send('강아지')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})