twoStrings();

function twoStrings(s1="Hello", s2="world") {
    for(let i=1;i<s1.length;i++){
        for(let j=0;j<s1.length;j++)
        {
            console.log(s1.substr(0,i));
          if(s2.includes(s1.substr(0,i))){
              console.log(s1.substr(0,i));
              console.log("YES");
          }
       }        
    } 
  }
  