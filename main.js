
const person={
    userName:"Din",
    userAge:22,
    hobbi:"Play game",
} ;  
const promise = new Promise((resolve) =>{
    resolve(person);
});
promise
.then( () => {
    JSON.parse=(person);
})
.then (() =>{
    console.log(person)
    
});

