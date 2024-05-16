var events = require("events");

exports.eventHandler = {
    "emitter" : () => {

        // creating an event emitter.
        let eventMachine = new events.EventEmitter();

        // creating any event
        eventMachine.on('scream', () => {
            console.log("Screaming event fires!");
        })

        eventMachine?.addListener('capture', ()=>{
            console.log("Capture event fires");
        })

        console.log("Listner Count scream" , eventMachine.listenerCount('scream'));

        console.log("Listner Count capture", eventMachine.listenerCount('capture'))

        // firing a event
        eventMachine.emit('scream');

    }
}