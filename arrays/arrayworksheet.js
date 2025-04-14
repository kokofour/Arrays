//Part 1

let fruits = ["Apple", "banana", "cherry"]
console.log(fruits[1]);
// Index 1 is Banana
console.log(fruits.length);


//Part 2
fruits.push("oranges");
console.log(fruits)
fruits.pop();
console.log(fruits)

//challenge
fruits.push ("berries", "mango")
fruits.pop();
console.log(fruits.length) //updated array length


//Part 3: Looping Through Arrays

for(let i=0;i <fruits.length;i++){
    console.log(fruits[i])
}

for(let i=0; i < fruits.length; i++){
    console.log(fruits[i].toUpperCase());

}



//Part 4: Hands-on Practice

let cart =[];
cart.push("bread","eggs", "milk");
console.log(cart);
cart.pop();
console.log(cart);


//reverse order
let sequence =[1,2,3,4,5];
//empty array to store the reversed values

let reversed=[];

//for (let i=0; i <sequence.length; i++){
    //console.log(sequence[i].reverse);

for (let i=sequence.length-1; i>=0; i--){
    reversed.push(sequence[i]);
}
console.log(reversed);



//Part 5: Hands-on Practice
let array1 = ["a", "b", "c", "d"];
let array2= ["red", "green", "blue"];



for (let i=0; i< array1.length; i++){
    if (array1.length > array2.length)
        console.log("array1 is greater than array2!")
    else{
        console.log("array2 is greater!")
    }
}

// Part 6 : Print Even Indexed Elements
const array = [10, 20, 30, 40, 50, 60];
for (let i = 0; i< array.length; i++){
    if (i%2 ===0){
        console.log(array[i]);
    }
}


// Part 7 : Print Even Indexed Elements
const students = ["Alice", "Bob", "Charlie"];
const subjects = ["Math", "Biology", "English" ,"Computer Science"];

// Outer loop goes through each student
for (let i = 0; i < students.length; i++) {
  // Inner loop goes through each subject
  for (let j = 0; j < subjects.length; j++) {
    console.log(students[i] + " - " + subjects[j]);
  }
}

/*
  Explanation:
  - The outer loop selects one student at a time.
  - The inner loop pairs that student with every subject.
  - This is how nested loops work: for each item in the first array,
    you go through all items in the second array.
*/




















