 // 1. Javascript arrays
 let names = ["Nark", "Mathen", "Markthaniel", "Nathank"];
 console.log(names);

 console.log(names[2]); 

 let grades = [89,39, 55, 100];
 console.log(grades);

 let numbers = ["five", 6, 9, "three"];
 console.log(numbers);

 // 2. Javascript objects
 // Own customer datatype 

 let studentName = "Brother Warner";
 let studentClasses = ["WDD131", "CSE110"];
 let studentGrades = [67, 88];

 // this is an object
 let student = {
    // key/value pairs
    name:"Brother Warner",
    classes: ["WDD131", "CSE110"],
    grades:[67, 88]
 }
 // accessing object properties objectName.keyName
 console.log(student.name)

 // 3. Array methods 
 names.forEach((name) => {
    // runs this function once for every element in the array
    // one at a time
    console.log(name);
 })

 // .map can manipulate the array 
 let newNames = names.map(() => {
    return name + " Hatchley";
 });

 console.log(newNames);

 // returns new array filtered by boolean
 let filteredName = names.filter((name) =>{
    return name [0] === "M"; 
 })

 console.log(filteredName)

 const numbers = [125, 20, 5];

document.getElementById("output").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple");

