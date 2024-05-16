var http = require("http");

// Creating a new module.
var newModule = require("./newModule.js")
// Get the file operations module
const fileOperations = require('./fileOperations.js');

// the event handler module
const eventHandler = require('./event_handler.js');


http.createServer(function(req, res){
    res.write("Started to learn node js.")
    console.log("New Module", newModule?.["newModule"]?.["newFunction"]?.());
    
    // Perform the file operations
    // fileOperations?.fileOperations?.();

    // Perform the event handler
    eventHandler?.eventHandler?.emitter();

    res.end();
}).listen(1001, () => {
    console.log("Server listening at 1001!"); 
})
