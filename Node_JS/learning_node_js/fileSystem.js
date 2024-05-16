var fs = require("fs");
exports.fileSystemFunctios = {
    "read" : () => {
        fs.readFile("./fileSystem.txt",  "utf8", function(err, data){
            if(err){
                console.log("Error in file read", err);
                throw err;
            }else{
                console.log("File Data", data);
            }
        })
    },
    "write":()=>{
        fs.writeFile('./fileSystem.txt', "This is the new text!",function(err){
            if(err){
                throw err;
            }
        });
    },
    "append" :(config = {}) =>{
        let {text = "this is the appended text"}  = config;
        fs.appendFile("./fileSystem.txt", text, function(err){
            if(err){
                throw err;
            }
        });
    },
    "unlink":() =>{
        fs.unlink("./fileSystem.txt", function(err){
            if(err){
                throw err;
            }
        });
    }
}