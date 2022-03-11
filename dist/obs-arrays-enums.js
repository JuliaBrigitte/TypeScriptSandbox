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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
//enum Role {ADMIN=5,READ_ONLY, AUTHOR}
var person = {
    name: "Maximilian",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
var favoriteActivities;
var beliebigerArray;
favoriteActivities = ['Sports', "Playing"];
console.log(person);
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
    console.log(hobby.toUpperCase());
}
//# sourceMappingURL=obs-arrays-enums.js.map