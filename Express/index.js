// the home file

const express = require("express");
const app = express();

// Import the routing here
const newRouter = require('./routing')

// Import the middleware router here
const middlewareRouter = require('./middleware')

const port = 5000;

// Steps to use the middleware or callback
app.use('/routing', newRouter);

app.use('/middleware', middlewareRouter);

// Basic Hello world program

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(port , () => {
    console.log(`Server is listening at ${port}`);
})