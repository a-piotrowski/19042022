// for( let letter of "Hello"){
// console.log(letter);
// }

const express = require('express')
const app = express()

app.get('/', function (req, res){
    console.log(reg)
    res.send('helo')
})

app.listen(80)