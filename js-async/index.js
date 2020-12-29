console.log("before");
getUser(1,(user)=>{
    console.log(user);

    getRepositories(user.GithubUsername,(repo)=>{
        console.log(repo);
    });
});

console.log("after")

//Handling Async Javascript
// callbacks
// promises
// Async/Await

function getUser(id,callback){
    setTimeout(()=>{
        callback({"id" : id, GithubUsername : "Cody"});
    },2000);    
}

function getRepositories(username,callback){
    const repo = ['repo1','repo2','repo3'];
    setTimeout(()=>{
        callback({"repo" : repo, GithubUsername: username});
    },2000);
}