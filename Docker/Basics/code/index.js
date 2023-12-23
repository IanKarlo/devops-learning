const express = require('express')

const PORT = 8080

const app = express()

app.get('/', async (_, res) => {
    return res.send(`App runing on port: ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`App runing on port: ${PORT}`)
})