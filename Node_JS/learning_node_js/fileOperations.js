const fileSystemFunctios = require('./fileSystem.js');

exports.fileOperations = () => {
    // console.log("File System Functions", fileSystemFunctios);
    const {read, write, unlink, append} = fileSystemFunctios?.fileSystemFunctios || {};

    read();
    write();
    read();
    write();
    append();
    read();
    // unlink();
}