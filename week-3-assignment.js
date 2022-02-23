//1
let ages = [3, 9, 23, 64, 2, 8, 28, 93];//defining a variable that represent an array of ages.

let sum = 0;//1c defining variable "sum" to equal 0. This is needed for the for loop.

ages.push(8);//adds the age "8" to the end of the array "ages". part of 1b

let firstItem = ages[0];//defining a variable that represents the first element in the array "ages".

let lastItem = ages[ages.length-1];//defining a variable that represents last element in the array "ages".

let diff = lastItem - firstItem; //defining a variable that represents the difference of the first element from the last element.

console.log(diff);//prints the variable diff, in this case it should take the difference of 93 - 3 and return 90. 

for (let i = 0; i < ages.length; i++){
    sum += ages[i];// for loop set up to add all of the elements in array "ages". 1c
}

let avg = sum / ages.length;//setting a variable to represent the average of the elements in the array "ages", which is 238/9. this array is including the new age added to the original array. 1c

console.log(avg);//1c


//2
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];//creating an array of names.

var avgName = 0;//defining a variable for the for loop. 

let concatNames = "";//defining a variable for the for loop to concatenate the names in the array "names". for 2b

for (let i=0; i < names.length; i++ ){
    avgName += names[i].length;
}//for loop to add all of the letters in the array "names".

for (let i = 0; i < names.length; i++){
    if (i > 0) {
        concatNames += " ";//adding a space between the elements in the array when concatenated together. for 2b 
    }
    concatNames +=  names[i];
}//for loop to concatenate the names in the array separated by spaces. 

console.log(concatNames);//prints the names in the array "names" concatenated together 

console.log(avgName / names.length);//part 2a to find the average letters per name, total number of letters is represented by variable "avgNames" and divide it by number of elements in the array "names".


//3. to access the last element of an array, use the .length-1 method. Or, if you know how many elements are in the array, you can subtract one from it and pull it using its index. 
let array = [1, 2, 3, 4, 5];

let lastElement = array[array.length-1];//when the last element index is unknown. 

let otherLast = array[4];//using the index method, knowing the last index of the array.

console.log(lastElement);

console.log(otherLast);


//4. to access the first element of an array, use the index method. All arrays start with the index [0]. 
let array2 = [2, 4, 6, 8];

let firstElement = array2[0];//assigning a variable that represents array at index 0.

console.log(firstElement);


//5. Create a new array called nameLengths. Write a loop to iterate over the prev created names array and add the length. 
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];//creating an array of names.

let namesLength = [];

for (let i = 0; i < names.length; i++ ) {
    namesLength.push(names[i].length);
//for loop used to iterate the elements in the array "names" and the .push method returns the array with the length in each element as the new elements.
}

console.log(namesLength); //return the numbers in array form. 


//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
// let namesLength = [3, 5, 3, 5, 4, 3];//new array from prev problem. this is how it should look like
let sumNames = 0;
for (let i = 0; i < namesLength.length; i++ ) {
    sumNames += namesLength[i];//for loop to add the elements in namesLength.

}

console.log(sumNames);


//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function manyWords(word, n){//calling a function manyWords to take in two parameters. 
    let tempword = "";
    for (let i = 0; i < n; i++){
        tempword += word;//for loop to repeat the string called in the function. 
    }
    return tempword;
}
console.log(manyWords("Hello",3));


//8. Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function fullName(firstName, lastName){
    return firstName + " " + lastName;//the values of firstName and lastName has to be strings.

}

fullName("John", "Smith");


//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
var arr= [5, 8, 10, 40, 35, 15]
function numbers(arr){
    sum = 0;
    for(i=0; i<arr.length; i++){
        sum += arr[i];
    }

    // if(sum > 100){
    //   return true;
    // }
    // else {
    //     return false;
    // }

    return sum > 100;//given the boolean operator, shortcuts can be made to reduce lines of code.
}
console.log(numbers(arr));


//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
function calculate(array) {
    return array.reduce((a, b) => a + b) / array.length;//arrow function to shorten the function to add the array and divide by the length.
}//the function calculate brings in an array, with that array, return the previous added to the current value, then divide by the length of array.

console.log(calculate([24, 88, 12, 4]));


//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array

function array1And2Avg(array1, array2){//function with two parameters
    if (array1.length == 0){
        array1.push(0);// if statement to protect against an empty array. if the array is an empty array with no value, insert a value so that the length of the array be 1.
    }
    let sumA = 0;//defining a variable to find the sum of array 1
    for (let i = 0; i < array1.length; i++) {
         sumA += array1[i];//for loop to add the elements in the array 1
    }
    let sumB = 0;//defining a variable to find the sum of array 2
    for (let i = 0; i < array2.length; i++) { 
        sumB += array2[i]; //for loop to add the elements in the array 2
    }
    let avgA1 = sumA / array1.length;//defining variables that equal the quotient of the total sum over the length of the array.
    let avgB2 = sumB / array2.length;
    if (avgA1 > avgB2) { 
        return true;//if statement to return true if the average of array 1 is greater than the average of array 2
    } 
    else {
        return false;
    }
}

console.log(array1And2Avg([20, 21, 22], [1, 2, 3]));


//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {//function with two parameters 
    if (isHotOutside && moneyInPocket >= 10.5){// boolean statement to be true for both situations
        return true;
        
    }
    else {
        return false;
    }
}

willBuyDrink(true, 11.5);//calling in true for isHotOutside and having $11.50 cents


//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

function weeksLeft(totalWeeks, currentWeek) {
    return totalWeeks - currentWeek;
  }

weeksLeft(18, 4);//this function called weeksLeft represents weeks left in the bootcamp. it takes the difference of the current week of the bootcamp from the total amount of weeks in the bootcamp and returns the amount of weeks left. 

