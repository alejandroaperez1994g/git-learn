// Core Typed
// -number
// -string
// -boolean
// -object
// -arrays
// -tuples is an array of fixed length. Ex [1, 'admin']




const person:{
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string],
} = {
    name: 'John', // string
    age: 36, // number
    hobbies: ['walk', 'run', 'futbol'], //arrays
    role: [1, 'admin'], //tuple
};
  
console.log(person.name);

for(let hobbie of person.hobbies){
    console.log(hobbie.toUpperCase())
}
  