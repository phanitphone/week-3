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

let firstElement = array2[0];

console.log(firstElement);


//5.
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];//creating an array of names.

let namesLength = [];

for (let i = 0; i < names.length; i++ ) {
    namesLength.push(names[i].length);

}

console.log(namesLength); //return the numbers in array form. 





//6.
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];//creating an array of names.
let namesLength = 0;//THIS IS CHANGED TO INTEGER FOR THE SUM OF THE ARRAY. 

for (let i = 0; i < names.length; i++ ) {
    namesLength += names[i].length;

}

console.log(namesLength);

//7.
function manyWords(word, n){
    let tempword = "";
    for (let i = 0; i < n; i++){
        tempword += word;
    }
    return tempword;
}
console.log(manyWords("Hello",3));



//8.
function fullName(firstName, lastName){
    return firstName + " " + lastName;

}

fullName("John", "Smith");



//9.
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

    return sum > 100;
}
console.log(numbers(arr));


//10.
function calculate(array) {
    return array.reduce((a, b) => a + b) / array.length;
}

console.log(calculate([24, 88, 12, 4]));


//11.

function arrayAbove(array1, array2) {
    for (let i = 0; i < array1; i++) {
         array1 = array1[i] / array1.length };
    for (let i = 0; i < array2; i++) { 
        array2 = array2[i] / array2.length };
    console.log(array1);
    console.log(array2);
    if (array1 > array2) { 
        return true;
    } 
    else {
        return false;
    }
}

console.log(arrayAbove([11, 4, 3, 6], [1, 2, 3]));


//12.

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket >= 10.5){
        return true;
        
    }
    else {
        return false;
    }
    // return isHotOutside && moneyInPocket >= 10.5;
  }

willBuyDrink(true, 11.5);


//13.

function weeksLeft(totalWeeks, currentWeek) {
    return totalWeeks - currentWeek;
  }

weeksLeft(18, 4);

