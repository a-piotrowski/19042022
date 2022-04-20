const express = require('express')
const app = express()
const path = require('path')

// KONFIGURACJA STATYCZNEGO FOLDERU
app.use( express.static( path.join(__dirname, '/src/static')))


// Pobieranie informacji od klienta 

app.post("/sendForm", (req, res) => {
console.log(req.body)

res.send|('OK')
})

app.listen(80)

