const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
eventEmitter.on('tutorial', ()=>{
    console.log('test');
});
eventEmitter.emit('tutorial');

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name= name;
    }
    get name(){
        return this._name;
    }
}
let pedro = new Person("Pedro");
pedro.on("name",() =>{
    console.log("my name is " +pedro.name);
})
pedro.emit("name");