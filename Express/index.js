// the home file

const express = require("express");

// Connect to a mongo client using express
const { MongoClient } = require('mongodb');

const app = express();

app.locals.title = "Jangra"

// Import the routing here
const newRouter = require('./routing')

// Import the middleware router here
const middlewareRouter = require('./middleware')

// Import the overriding api
const overridingApi = require('./overridingExpress/overridingApi');

// The application method
const applicationMethods = require('./applicationMethods/applicationMethods');

const port = 5000;

let mongoUsername = "ankit_tc"
let mongoPassword = "ankit_tc"
let mongoDbClientUrl = `mongodb+srv://${mongoUsername}:${mongoPassword}@users.snvxk72.mongodb.net/?retryWrites=true&w=majority&appName=users`

// Providing the app inside all the apis
app.use((req, res, next) => {
    req.mainApp = app;
    next()
})

// Console log all the req. parmas for all api's here
app.all('*', (req, res, next) => {
    console.log("Request Path for api -> ", {
        "body" : req.body,
        "params" : req.params,
        "title" : req.title,
    });
    next();
})


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

app.use('/applicationMethods', applicationMethods);

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
    console.log("App mount path", app.mountpath);
})