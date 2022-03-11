// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];  //this is a tuple
// } = {
//     name: "Maximilian",
//     age: 30,
//     hobbies: ['Sports','Cooking'],
//     role: [2, 'author']
// }

//const ADMIN=0;
//const READ_ONLY=1;
//const AUTHOR=2;

enum Role {ADMIN,READ_ONLY, AUTHOR}
//enum Role {ADMIN=5,READ_ONLY, AUTHOR}

const person = {
    name: "Maximilian",
    age: 30,
    hobbies: ['Sports','Cooking'],
    role: [2, 'author']
}

let favoriteActivities: string[];
let beliebigerArray: any[];
favoriteActivities=['Sports',"Playing"]

console.log(person);
console.log(person.name);

for (const hobby of person.hobbies)
{
    console.log(hobby);
    console.log(hobby.toUpperCase());
}