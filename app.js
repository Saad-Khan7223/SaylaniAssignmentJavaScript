//Task#1
// var number=prompt("Enter a number you want to reverse");
// function reverseNumber(){ 
//      var num=number.split("").reverse().join("");
//     return console.log(num);
   

// } 
//   reverseNumber();
//Task #2
// var word=prompt("Enter your word");
// function palidromeWord(){
// var palidrome=word.split("").reverse().join("");
// if(word===palidrome)
// {
//     console.log("it is palindrome");
// }
// else{
//     console.log("its not palindrome");
// }
// }
// palidromeWord();

//Task #3
// var word=prompt("Enter your word");
// var str=[];
// function  combinations(){

// for (var i=0 ; i< word.length; i++){
//     for(j=i+1 ; j<word.length+1;j++)
//     {
//         str.push(word.slice(i,j))
//     }
// }
// return str
// }
// console.log(combinations())

// Task #4
// function alphabet_order(str)
//   {
// return str.split('').sort().join('');
//   }
// console.log(alphabet_order("webmaster"));

//Task #5
// function uppercase(str)
// {
//    var array1 = str. split(' ');
//    var newarray1 = [];
//    for(var x = 0; x < array1. length; x++){
//     newarray1. push(array1[x]. charAt(0). toUpperCase()+array1[x]. slice(1));
//    }
//    return newarray1. join(' ');
// }
// console.log(uppercase("the quick brown fox"))

//Task#6
// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = 0;
//     var word;
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord){
//       longestWord = strSplit[i].length;
//       word=strSplit[i];
//        }
//     }
//     return word;
//   }
//  console.log( findLongestWord("Web Development"));

//Task#7
// function countVowel(str) { 

//     var count = str.match(/[aeiou]/gi).length;

//     return count;
// }

// var string = prompt('Enter a string: ');

// var result = countVowel(string);

// console.log(result);

//Task #8

// take input from the user
// var number = parseInt(prompt("Enter a positive number: "));
// function prime(){
// var isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (var i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(number + " is a prime number");
//     } else {
//         console.log(number +" is a not prime number");
//     }
// }

// // check if number is less than 1
// else {
//     console.log("The number is not a prime number.");
// }
// }
// console.log(prime());

//Task #9
// function typeReturn(argument){
//  return   console.log(typeof(argument))

// }

// typeReturn(true);

//Task #10
function secondLargestSecondLowest(arrayNumber)
{
  arrayNumber.sort(function(x,y)
           {
           return x-y;
           });
  var arrayNumberStored = [arrayNumber[0]];
  var result = [];
  
  for(var j=1; j < arrayNumber.length; j++)
  {
    if(arrayNumber[j-1] !== arrayNumber[j])
    {
      arrayNumberStored.push(arrayNumber[j]);
    }
  }
    result.push(arrayNumberStored[1],arrayNumberStored[arrayNumberStored.length-2]);
  return result.join(',');
  }

console.log(secondLargestSecondLowest([3,4,6,7]));