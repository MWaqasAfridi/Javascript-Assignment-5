// Question no 1

// var arr;
// arr = [[]];

 
// Question no 2

// var arr;
// arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// for(var i = 0; i < arr.length; i++){
//      document.write(arr[i].join(" ")+"<br>");
// }

// Question no 3

// var i;
// for(i = 1; i <= 10; i++){
//    document.write(i+"<br>");
// }


// Question no 4

// var table = prompt("Enter a number to show its multiplication table");
// document.write("Multiplication table of " + table + "<br>");

// var tableLength = prompt("Enter length multiplication table");
// document.write("Length " + tableLength + "<br><br>");

// for(var i = 1; i <= tableLength; i++){
//     document.write(`${table} x ${i} = ${table*i} <br>`)
// }


// Question no 5

// var fruits = ['apple','banana','mango','orange','strawberry'];
// for(var i = 0; i < fruits.length; i++){
// document.write(`${fruits[i]} <br>`)
// }
// document.write("<br>")
// for(var i = 0; i < fruits.length; i++){
//     document.write(`Element at index ${i} is ${fruits[i]} <br>`)
//     }


// Question no 6

// document.write(`<h3> Counting: </h3>`);
// for(var i = 1; i <= 15; i++){
//         document.write(`${i} , `);
// }

// document.write(`<h3> Reverse Counting: </h3>`);
// for(var i = 10; i >= 1; i--){
//         document.write(`${i} , `);
// }

// document.write(`<h3> Even: </h3>`);
// for(var i = 0; i <= 20; i++){
//     if(i % 2 === 0){
//         document.write(`${i} , `);
//     }
// }

// document.write(`<h3> Odd: </h3>`);
// for(var i = 1; i <= 20; i++){
//     if(i % 2 !== 0){
//         document.write(`${i} , `);
//     }
// }

// document.write(`<h3> Series: </h3>`);
// for(var i = 2; i <= 20; i++){
//     if(i % 2 === 0){
//         document.write(`${i}k , `);
//     }
// }


// Question no 7

// var arr = ['cake','apple pie','cookie','chips','patties'];

// var userInp = prompt("Welcome to Waqas Bakery.What do you want to order sir / ma'am");
// var found = false;
// for(var i = 0; i < arr.length; i++){
//    if(arr[i] === userInp){
//          found = true;
//          break;
//    }
// }
// if(found){
//   document.write(`${arr[i]} is <b> available </b> at index ${i} in our bakry`)
// }
// else{
//     document.write(`We are sorry.${userInp} is <b> not available </b> in our bakry`)
// }


// Question no 8

// var arr = [24,53,78,91,12];
// console.log(`Array items : ${arr}`);
// var largest = arr[0];
// for(var i = 0; i < arr.length; i++){
//         if(arr[i] > largest){
//              largest = arr[i];
//         }
// }
// console.log(`The largest number is : ${largest}`);


// Question no 9

// var arr = [24,53,78,91,12];
// console.log(`Array items : ${arr}`);
// var smallest = arr[0];
// for(var i = 0; i < arr.length; i++){
//         if(arr[i] < smallest){
//              smallest = arr[i];
//         }
// }
// console.log(`The smallest number is : ${smallest}`);


// Quuestion no 10

// var i;
// for(i = 1; i <= 100; i++){
//       if(i % 5 === 0){
//          document.write(`${i} , `);
//       }
// }