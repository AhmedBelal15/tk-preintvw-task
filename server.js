const express = require('express')
const open = require('open');

const app = express()

app.use('/', express.static(__dirname))

setTimeout(()=>open('http://localhost:5050'), 1000)

app.listen(5050, ()=>console.log('app is litening on port 5050'))