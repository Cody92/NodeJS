const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const logger = require("./middleware/logger");
const auth = require("./middleware/authentication");
const config = require("config");
const appdebug = require("debug")("app:startup");
const dbdebug = require("debug")("app:db");
const genres = require('./routes/genres');
const home = require('./routes/home');

const app = express();
app.use(express.json());

app.engine('pug',require('pug').__express);
app.set('view engine','pug');
app.set('views','./templates');

app.use(helmet());
app.use(logger);
app.use(auth);
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api/genres',genres);
app.use('/',home);

//Configuration
console.log("Application Name : " + config.get("name"));
console.log("Mail : " + config.get("mail.host"));
console.log("Mail Password : " + config.get("mail.password"));

//use NODE_ENV
if(app.get('env') === "development"){
    //console.log("Morgan enabled...");
    appdebug("Morgan Enabled...");
    app.use(morgan('tiny'));    
}

dbdebug("Conected to Database...");


const port = process.env.port || 3000;
app.listen(port,()=>{
    console.log(`Server started at ${port}`);
})

