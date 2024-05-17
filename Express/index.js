// the home file

const express = require("express");

// Connect to a mongo client using express
const { MongoClient } = require('mongodb');

const app = express();

// Import the routing here
const newRouter = require('./routing')

// Import the middleware router here
const middlewareRouter = require('./middleware')

// Import the overriding api
const overridingApi = require('./overridingExpress/overridingApi');

const port = 5000;

let mongoUsername = "ankit_tc"
let mongoPassword = "ankit_tc"
let mongoDbClientUrl = `mongodb+srv://${mongoUsername}:${mongoPassword}@users.snvxk72.mongodb.net/?retryWrites=true&w=majority&appName=users`


// MongoClient.connect(mongoDbClientUrl)?.then((err, db) => {
//     app.use((req, res, next) => {
//         req.dbClient = client;
//         next();
//     })

// })
// Steps to use the middleware or callback
app.use('/routing', newRouter);

app.use('/middleware', middlewareRouter);

app.use('/overridingApi', overridingApi)


// Steps : To handle and set the ip restriction and trust proxy
app.set('trust proxy', (ip) => {
    if (ip === '127.0.0.1' || ip === '123.123.123.123') return true // trusted IPs
    else return false
})

// Basic Hello world program

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
})