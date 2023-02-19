const express = require('express')
const cors = require('cors')

const PORT = 8080

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    return res.send("Hello World!")
})

app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`)
})