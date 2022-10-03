

const promise = new Promise((resolve) =>{
    resolve();
});
promise
.then( () => {
    let person={
        userName:"Din",
        userAge:22,
        hobbi:"Play game",
    };    
    
    const person1 = JSON.parse=(person);
})
.then (() =>{
    let person={
        userName:"Din",
        userAge:22,
        hobbi:"Play game",
    };    
    const person1 = JSON.parse=(person);
    console.log(person1)
    
});