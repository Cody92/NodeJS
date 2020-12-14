/* General operations =========================================*/

const logger = require('./logger');

let sayHello = (name) => {
    console.log("Hello " + name);
    logger.logmessage("utkarsh")
}

sayHello("Utkarsh")
console.log("Global object: " + globalThis.Date());

/* Get path object details ====================================*/

const path = require('path');
let pathObj = path.parse(__filename);
console.log(pathObj);

/* OS related operations ======================================*/

const os = require('os');

/* byte to GB conversion divide by 1e+9 */
console.log("Free Memory : " + os.freemem()/1000000000);
console.log("Total Memory : " + os.totalmem()/1000000000);

/* Using template string for printing EcmaScript 6 or ES6 or ES6 2015*/
console.log(`Free Memory : ${os.freemem()/1000000000}`);
console.log(`Total Memory : ${os.totalmem()/1000000000}`);

/* File related Operations ====================================*/

const fs = require("fs");

const files = fs.readdirSync('./');
console.log(files);

fs.readdir(".$",(err,files)=>{
   if(err) console.log(err);
   else console.log(files);
})

/* Event realeted operations ===================================*/
// the casing for the const represents a class. events is a class
const EventEmitter = require('events');
const emitter = new EventEmitter();

//Listen to an event
emitter.on('messagelogged',(args)=>{
    console.log("Listener called!",args);
})

//Raise an event
emitter.emit('messagelogged');

//Raise an event with params
emitter.emit('messagelogged',{"id" : 1, "name":"Utkarsh"})

/* Http related operations ======================================*/
const http = require('http');
const server = http.createServer((req,res)=>{
  if(req.url === '/'){
      res.write('Request recieved at home.');
      res.end();
  }

  if(req.url === '/home/course'){
      res.write(JSON.stringify([1,2,3]));
      res.end();
  }
});

server.listen(3000);
console.log("Listening on port 3000...");