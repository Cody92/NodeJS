const p = new Promise((resolve, reject)=>{
    //Kick of asnc work
    // should resturn a value or error
    //resolve and reject are functions
    
    setTimeout(() => {
        //resolve(1);
        reject(new Error('message'));      
    }, 2000);  
});

p
  .then(result => console.log("Result " + result))
  .catch(err => console.log('Error : ', err.message));