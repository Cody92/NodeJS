const express = require('express');
const joi = require('Joi');

const app = express();

//json middlewere
app.use(express.json())

let courses = [
    {"id" : 1, "name" : "mathematics"},
    {"id" : 2, "name" : "physics" },
    {"id" : 3, "name" : "chemestry"},
    {"id" : 4, "name" : "Social Sciences"}
]

app.get('/',(req,res)=>{
  res.send('Hello World');
});

app.get('/api/courses',(req,res)=>{
  res.send(courses);
});

app.get('/api/courses/:id',(req,res)=>{
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course) res.status(404).send(`Course ${req.params.id} not found`);
  else
  res.send(course);
});

app.get('/api/courses/:id/:name',(req,res)=>{    
    res.send(req.query);
})

app.post('/api/courses',(req,res)=>{
//Validate user input
//add data

//======== Object Destructor Notation ===================
//const result = validateCourses(req.body);  
const { error } = validateCourses(req.body);  
if(error) return res.status(400).send(result.error.details[0].message);
    
const course = {
  "id" : courses.length+1,
  "name" : req.body.name
};

courses.push(course);
res.send(course);
});

app.put('/api/courses/:id',(req,res)=>{
  // Look up the course
  // If not existing return 404

  // Validate 
  // If Invalid return 400 - Bad Request

  // Update Course
  // Return the updated course

  const lookup = courses.find(c => c.id === parseInt(req.params.id));
  if(!lookup) return res.status(404).send("The course given with id is not found!");

   //============= Object Destructure Notation ================== 
   //const result = validateCourses(req.body);
   const { error } = validateCourses(req.body);
   if(error) return res.status(404).send(result.error.details[0].message);
  
  lookup.name = req.body.name;
  res.send(lookup)  
});

app.delete('/api/courses/:id',(req,res) => {
  // Lookup the course
  // If not existing return 404

  const lookup = courses.find(c => c.id === parseInt(req.params.id));
  if(!lookup) return res.status(404).send("Course with given ID not found!");

  // delete
  const index = courses.indexOf(lookup);
  courses.splice(index,1);
  res.send(lookup);
});


function validateCourses(courses){
  const schema = joi.object({
    name : joi.string().min(3).required()
  });
  
  return schema.validate(courses);
}

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Listening on port ${port}....`);
});

