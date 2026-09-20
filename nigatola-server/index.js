const express = require("express")

const app = express()

const port = process.env.PORT || 3000


app.get('/',(req, res) => {
    console.log("Welcome to niga server")
    res.send("Welcome to niga server")
})

app.listen(port, () => {
    console.log(`Niga ${3000} no port diye entry nice`)
})