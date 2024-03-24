const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 8080

app.get('/version', (req, res) => {
  res.send('4') // change this string to ensure a new version deployed
})

app.use(express.static('dist'))

app.listen(PORT + 1, () => {
  console.log(`server started on port ${PORT}`)
})