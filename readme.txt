Nodejs
  - Runtime environment for running JS code. 
  - Not framework, not a programming language
  - Asynchronus programming
  - Can be used with both Relation/non-Relational DB
  - Highly scalable
  - Single threaded
  - event driven

Scope -
    Global - accessed using global or globalThis. console,setTimeOut, setInterval, function etc
    Local - var, let etc

- Every file in a node application is concidered as a module
- Variables and functions defined in that file are scoped to that file (Private)
- module varaible is available inside a module. It shows the metadata of that module. It is not global
- In a module we can export a single function or an object
- Node wraps our module inside a function before executing them (Module Wrapper Function)
     parameters to that functions are 
      - exports
      - require
      - module
      - __filename
      - __dirname

######################################
- path built-in module
    parse
- os built-in module
    freemem
    tatalmem
- fs built-in module
    readdirSync  (avoid Sync methods because they will block the thread/core)
    readdir
- event built-in module (core module)
    EventEmitter (Raise event with and without arguments)
- http built-in module
    CreateServer

######################################
npm

npm install -g npm@latest
npm install underscore