const express = require('express');
const router = express.Router();
const joi = require("Joi");

let genres = [
    {"id" : 1, "name" : "Action"},
    {"id" : 2, "name" : "Comedy"},
    {"id" : 3, "name" : "Drama"},
    {"id" : 4, "name" : "Adventure"}
];

router.get("/",(req,res)=>{
    res.send(genres);
});

router.get("/:id",(req,res)=>{
    res.send(genres.find(c => c.id === parseInt(req.params.id)));
});

router.put("/:id",(req,res)=>{
    const {error} = validateGenres(req.body)  
    if(error){
        res.status(400).send(`Body is not in correct format : ${error.details[0].message}`);
        return;
    }

    let findmatch = genres.find(c => c.id === parseInt(req.params.id));
    if(!findmatch) return res.status(400).send("No record found with given id");

    findmatch.name = req.body.name;
    res.send(genres);
});

router.post("/",(req,res)=>{
    const {error} = validateGenres(req.body);
    if(error) return res.status(400).send(`Error in message ${error.details[0].message}`);

    const genre = {
        "id" : genres.length+1,
        "name" : req.body.name
    }

    genres.push(genre);
    res.send(genres);
});

router.delete("/:id",(req,res)=>{
   const findMatch = genres.find(c=>c.id === parseInt(req.params.id));
   if(!findMatch) return res.send("Nothing to delete!");

   const index = genres.indexOf(findMatch);
   genres.splice(index,1);
   res.send(genres);
});

function validateGenres(genre){
    const schema = joi.object({
        name : joi.string().min(3).required()
    });

    return schema.validate(genre);
}

module.exports = router;