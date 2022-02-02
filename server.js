//1- import / require express

const express = require('express');
const users = require('./users');
const SayHi = require('./SayHi');

//2- initialisation of my app

const app = express();

//3- creation of the port 

const PORT = 6000;

//4- create the server

app.listen(PORT, (err) => 
err ? console.error(err) : console.log(`server listening on port ${PORT}`));

//5- routing

app.get('/', (req, res) =>{
    res.send("<h1>hello this is january</h1>")
})

// 6- Middleware
app.use(SayHi)
app.use('/api', require('./routes/students'))



app.get('/contact', (req, res) =>{
    res.send("<h2>this is the contact components</h2>")
})

app.get('/index', (req, res) =>{
    res.sendfile('./index.html')
})

app.get('/*', (req, res) =>{
    res.send("<h2>404 not found</h2>")
})