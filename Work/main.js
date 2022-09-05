const developer = {
  name: "Vasiliy",
  surname: "Petrov",
  age: 30,
  isMaried: false,
  skills: ["JavaScript", "TypeScript", "CSS"],
  addAge() {
    this.age++;
    console.log(this);
  },
  getMarried() {
    this.isMaried = true;
  },
};

developer.addAge();

// console.log(developer.skills);
// for(let prop in developer){
//   console.log(prop, developer[prop]);
// }

// const numbers=[1, 2, 3, 4, 5];

// for(let number of numbers){
//   console.log(number);
// }
