// Handling the basic routing here
const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if(true){
        console.log("Middleware passed");
        next();
    }else
      res.send("Failed to connect to the server!");
})

// Get method
router.get('/', function(req,res){
    res.json({
        "title": "Function Passed!",
        "res" : {
            "status" : 2000,
        }
    })
})

// Render the all method.
router.all('/test', (req,res,next) => {
    // Middle ware for only this part /test.
    console.log("Middle ware for test route!");
    next();
})

// Routing pattrens
// /ab?cd -> will trigger if we route has /abcd , /abc, acd
// /ab+cd    /   ab*cd -> will trigger when path starts with ab and ends with cd.
// /ab(cd)e -> will trigger with abe, or abcde
// /a/ -> will trigger anything with a
// Path can consist of any pattern


// ----------------------------------- Handling Routing Parameters -------------------------------------- //
// Params requets
router?.get('/user/:id/name/:name', (req, res) => {
    res.send(req.params);
})

// Using - and . with the help of request parameters.
router?.get('/user/:firstName-:lastName/id/:from.:to', (req, res) => {
    // http://localhost:5000/routing/user/Ankit-Jangra/id/123.4556
    res.send(req.params);
})

// Method : Function to handle the multiple callbacks and pass multiple callbacks to a single route
router.get('/multiple', [
    (req, res, next) => {console.log("Multiple Middleware 1"); next()},
    (req,res, next) => {console.log("Multiple Middleware 2"); next()}
] , (req, res, next) => {
    console.log("Final Function!");
    res.send("Multiple Callback Success!");
} )


// Handle the nested routing in a single file
router.route('/nestedRouting')
    .get((req, res) => {
        console.log("Nested Routing function");
        res.send("Nested Routing!")
    })

module.exports = router