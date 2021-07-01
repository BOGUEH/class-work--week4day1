
let users = [
    {
        name:   'blessing',
        age:    15,
    },
    {
        name:   'tega',
        age:    30,
    }
];

for (let i = 0; i < users.length; i++) {
   console.log(users[0].age);
   console.log(users[i].name);
    
}

users.forEach( function (val, index, arr){ 

console.log(val);
    
});


for (let x=0; x<=15; x++) {
    if (x === 0) {
            console.log(`${x}  is even`);
    }
    else if (x % 2 === 1) { //
            console.log(`${x}  is odd`);   
    }
    else {
            console.log(x + " is even");
    }
}