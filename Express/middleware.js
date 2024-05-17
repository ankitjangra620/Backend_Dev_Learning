// to handle the examples used by the middlewares

const express = require("express");

const middlewareRouter = express();

middlewareRouter.use((req, res, next) => {
    // First middleware to get called in the case of middleware router api call
    console.log("Middleware router logs start!");
    next();
})



// Else middle ware goes here

// 1. Application Level Middleware.
// 2. Router Level Middleware
// 3. Error based middleware
// 4. Built in middleware -> express.static, express.urlencoded
// 5. Third party middleware


middlewareRouter.use((req, res, next) => {
    // Last middleware to get called in the case of middleware router api call
    console.log("Middleware router logs end!");
    next();``
})


middlewareRouter.route('/')
    .get((req, res) => {
        console.log("Basic Middleware routing!");
        res.send("Basic Middleware routing!");
    })

module.exports = middlewareRouter;