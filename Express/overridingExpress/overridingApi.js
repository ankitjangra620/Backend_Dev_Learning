const express = require('express')

const router = express();

// overriding the sendJson function for this router function here
router.response.sendJson = function(code, jsonObj, message){
    // we can modify the json here and perform any kind of the operation

    console.log("Send JSON function calles")

    return this.status(code).send({
        "obj" : JSON.stringify(jsonObj),
        "message" : message
    })
}

// Setting up the error middle ware here
router.use((err, req, res, next) => {
    res.sendJson(400,{
        errorMessage : err,
    }, "User information fetch process failed!");
})



// Explain the usag of define property function
// Function:  used to define the configuration of the request and response object property with its function
Object.defineProperty(router.request, 'params', {
    get(){ return {
        "paramsName" : "Ankit Jangra",
    } },
    set(msg){
        this.value = {
            "paramsName" : msg,
        };
    }
})

router.route('/')
    .get((req, res) => {

        // Consle the response of the req.params and send it back inside the response
        console.log(req.params);
        req.params.paramsName = "Legend"

        // let {dbClient} = req;
        // console.log("DB client", dbClient);

        res.sendJson(200,{
            name : "Ankit",
            dob : "august",
            // "collectionCount" : dbClient.collection('users')?.find || "Not found",
            "response" : req.params
        }, "User information fetched successfully!");
    })



module.exports = router