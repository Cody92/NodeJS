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
    totalmem
- fs built-in module
    readdirSync  (avoid Sync methods because they will block the thread/core)
    readdir
- event built-in module (core module)
    EventEmitter (Raise event with and without arguments)
- http built-in module
    CreateServer

######################################
Node Package Manager

npm install -g npm@latest
npm install underscore

major.minor.patch

patch : bug fixes
minor : additional changes without breaking existing application
major : changes that could potentially break existing application

^4.16.6 charet character demotes any version which has the major version as 4
~4.16.6 tilda character demotes any version which has major and minor version as 4 and 16 also 
denoted as 4.16.x 
4.16.6  use exact version of the package

npm list : displays all dependencies from package.json
npm list --depth=0 : displays only the immidiate dependencies

npm view : view package.json file
npm view mongoose dependencies : view all deplendencies of mongoose
npm view mongoose versions : view all versions of mongoose

npm outdated : view outdated packages
npm update : updates the outdated package to latest wanted version (not update the major version if mentioned)
npm i -g npm-check-updates : force update to latest version regardless of major version
ncu -u : update the package.json to latest version as well
npm install : install the latest version

dev dependencies:
npm i jshint --save-dev : install the dependency as a development only dependency
all dependencies are stored in node_modules folder. They are only segregated in packages.json

Uninstall a package:
npm un mongoose

Working with global packages:
npm i -g npm : install latest nom version
npm -g outdated : shows all the outdated packages
npm un -g mongoose : uninstall a global package

Publish a package
npm init
create a new file index.js (entry point for the npm)
npm publish 

Update a published package
have to increase the version manually in package.json file
or use npm version minor | npm version major | nom version patch

########################################################################
Express.js

Fast and lightweight framework for building web applications

RESTful API's 
CURD operations : Create (POST), Update(PUT), Read(GET) , Delete(DELETE)
app.get(); app.post(); app.put(); app.delete(); app.Listen(3000,()=>{})

Nodemon
--------
Install nodemon for auto-restart of server
npm install -g nodemon
nodemon index.js

Environment Variables
---------------------
Remove the default port 3000
process.env.PORT (environment variable PORT on process)

Route parameters
----------------
/api/courses/:id  (req.params)
/api/courses?sortBy=name (req.query)

get
post
put
delete (use splice)

User input Validation
---------------------
Joi (Third Party package)
declare a schema object and validate the body using that object

Always return to exit from the code block otherwise rest of the code will get executed

#####################################################
Advance topics

Middleware
Configuration
Debugging
Templating Engines

Middleware
-----------
Request Processing pipeline (middleware)
Request -> json() -> Route() -> Response

app.use(function(req,res,next){ next();})

call next to actually call the other middleware in the pipeline

express.json()  //Parses json request and set req.body parameter
express.urlencoded() //Parses incoming Request with urls encoded payload
express.static() //used to serve static files

Third Party Express Middleware 
-----------------------------
helmet - hepls secure app setting some http headers
morgan - logs http request. Lot of formats. Use morgan('tiny')

Configuration
-------------
Environemnt dev,qa,prod
app.get('env') // return development if NODE_ENV environment varaiable is not found
process.env.NODE_ENV  get environment variable from process

node packages to handle app configurations like we have in .net as .config files
npm rc (very popular)
npm config (less popular but effective)

config.get("configuration name") // NODE_ENV must be set to match the environment file name
custom-environment-variables.json ## Name is important. This file contains a mapping of settings to the invironment variables. For ex password.

Debugging
---------
use debug module instead of console.log statements
you get the control over what debugging information you want to see so the application will not log each 
and every information on console
require('debug')('app:startup')  // returns a function
require('debug')('app:db')       // returns a function
set environment variable DEBUG=app:*

Templating Engines
------------------
Generate dymnamic HTML and returning to client
Pug
Mustache
EJS

Structure Code
--------------
use router instead of app. express.Router()
move all logic to routes
use app.use('base url path', router object) to load the routes

########################################################################
Asynchronus Javascript

Synchronus calls : Thread has to wait for Response
Async calls : Thread don't have to wait for Response

If a call is made to async function which takes time like db connection call and the results are 
beign tried to access immidiately then you would get undefined because the result is not ready yet.
Since you are using Async call, thread will move on to the next call and will not wait for the result.

Patterns for dealing with Async code
-------------------------------------
1) callbacks
   ---------
   When the result of an Async function is ready, the callback function will be called.

2) promises
   --------
   

3) Async/Await
   -----------





