//Coding challenge #1. Coding challenge #1: Print numbers from 1 to 10
console.log('Problem 1');
for(let i = 1; i<=10; i++)
{
    console.log(i);
}
//Coding challenge #2. Coding challenge #2: Print the odd numbers less than 100
console.log('Problem 2=> 👉');
for(let i = 1; i< 100; i++)
{
    if(i%2 != 0)
    {
        console.log(i);
    }
    
}
// Coding challenge #3: Print the multiplication table with 7
console.log('Problem 3 => 👉');
for(let i = 1; i <= 10; i++ )
{
    let num = 7;
    let result = num * i;
    console.log(num, '*', i, '=', result);
}
// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10
console.log('Problem 4=> 👉');
for(let i = 1; i <= 10; i++)
{
    for(let j = 1; j <= 10; j++)
    {
        let result = i * j;
        console.log(i, '*', j, '=', result);
    }
}
// Coding challenge #5: Calculate the sum of numbers from 1 to 10
console.log('Problem 5=> 👉');
let sum = 0;
for(let i = 1; i <= 10; i++)
{
    sum += i;   
}
console.log('sum = ', sum );
// Coding challenge #6: Calculate 10!
console.log('Problem 6=> 👉');
let res = 1;
for(let i = 1; i <= 10; i++)
{
    res *= i;
}
console.log(res);
// Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30
console.log('Problem 7 => 👉');
let sumOdd = 0;
for(let i = 11; i > 10 && i < 30; i += 2)
{
    sumOdd += i;    
}
console.log(sumOdd);
// Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit
console.log('Problem 8 => 👉');
let num = 20;
let faren = num * 1.8 + 32 
console.log(faren);
// Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius
console.log('Problem 9 => 👉');
let numC = 20;
let cel = (num - 32) / 1.8 
console.log(cel);
// Coding challenge #10: Calculate the sum of numbers in an array of numbers
console.log('Problem 10 => 👉');
const arr = [1, 2, 3, 4, 5];
let sumArr = 0
for (let i = 0; i< arr.length; i++)
{
    sumArr += arr[i];
    if( sumArr >= 10)
    {
        break;
    }   
}
console.log(sumArr);
// Coding challenge #11: Calculate the average of the numbers in an array of numbers
console.log('Problem 11 => 👉');
let arrNum = [1, 2, 3, 4, 5];
let resAvg = calculateAverageNumber(arrNum)
console.log(resAvg);
function calculateAverageNumber(arrNum)
{
    let sum = 0;
    for (let i = 0; i< arrNum.length; i++)
    {
        sum += arrNum[i]
    }
    return sum/(arrNum.length)
}
// Coding challenge #12_1: Create a function that receives an array of numbers and returns an array containing only the positive numbers
console.log('Problem 12_1 => 👉');
let arrAll = [-1, -2, -3, 0, 11, 2, 3];
let resPos = getPositives(arrAll)
console.log(resPos);
function getPositives(arrAll)
{
    let arrAll2 = [];
    for( var elem of arrAll)
    {
        if(elem >= 0 )
        {
            arrAll2.push(elem)
        }
        
    }
    return arrAll2;
}
// Coding challenge #12_2: Create a function that receives an array of numbers and returns an array containing only the positive numbers
console.log('Problem 12_2 => 👉');
let arrAll_2 = [-1, -2, -3, 0, 11, 2, 3];
let resPos_2 = getPositives_2(arrAll_2)
console.log(resPos_2);
function getPositives_2(arrAll_2)
{
    return arrAll_2.filter(el => el >= 0)
}
// Coding challenge #13: Find the maximum number in an array of numbers
    // 👉 max_num.js
// Coding challenge #14: Print the first 10 Fibonacci numbers without recursion
    // 👉 fibonacci.js
// Coding challenge #15: Create a function that will find the nth Fibonacci number using recursion
    // 👉 fibonacci.js
// Coding challenge #16: Create a function that will return a Boolean specifying if a number is prime
    // 👉 prime.js
// Coding challenge #17: Calculate the sum of digits of a positive integer 
console.log('Problem 17 => 👉');
function sumDigits(digits)
{
    let s = digits.toString();
    let sumResult = 0;
    for (let char of s)
    {
        let d = parseInt(char);
        sumResult += d
    }
    return sumResult;
}
var sumD = sumDigits(1235231);
console.log(sumD);
// Coding challenge #18: Print the first 100 prime numbers
    // 👉 prime_print.js
// Coding challenge #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"
    // 👉 generate_prime.js
// Coding challenge #20: Rotate an array to the left 1 position
// Coding challenge #21: Rotate an array to the right 1 position
// Coding challenge #22: Reverse an array
    // 👉 array_functionality.js
// Coding challenge #23: Reverse a string
let str = 'barua'
console.log('Problem 23 => 👉', reverseStringVal(str));
function reverseStringVal(str)
{
    let str2 = ""; 
    for(let i = str.length-1; i >= 0; i--)
    {
        var charc = str[i]
        str2 += charc
    }
    return str2
}
// Coding challenge #24: Create a function that will merge two arrays and return the result as a new array
    // 👉 array_merge.js
// Coding challenge #25: Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
    // 👉 array_merge.js
// Coding challenge #26: Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
    // 👉 array_merge.js
// Coding challenge #27: Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
    // 👉 array_distinct_elem.js
// Coding challenge #28: Calculate the sum of first 100 prime numbers
    // 👉 prime_sum.js
// Coding challenge #29: Print the distance between the first 100 prime numbers
//will do later
// Coding challenge #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
//will do later
// Coding challenge #31a. Create a function that will return the number of words in a text
    // 👉 count_words.js
// Coding challenge #32. Create a function that will capitalize the first letter of each word in a text
console.log('Problem 32 => 👉', capitalizeFirstWord("hello world poll"))
function capitalizeFirstWord(txt)
{
    var txt2 = "";
    for(var i = 0; i < txt.length; i++)
    {
        var currentChar = txt[i];
        var prevChar = i > 0 ? txt[i-1] : " ";
        if(!isSeparator(currentChar) && isSeparator(prevChar))
        {
            currentChar = currentChar.toUpperCase();
        }
        txt2 += currentChar;
    }
    return txt2;
}
function isSeparator(t)
{
    var separators = [" ", ".",",","\t","\n","\r",";","!","?",":"];
    return separators.includes(t);
}
// Coding challenge #33. Calculate the sum of numbers received in a comma delimited string
var numString = "1.3, 2.3, 4.5";
console.log('Problem 33 => 👉', sumNumberString(numString))
function sumNumberString(numString)
{
    var arrNum = numString.split(",");
    var sum = 0;
    for(var ar of arrNum)
    {
        sum += parseFloat(ar);
    }
    return sum;
}
// Coding challenge #34. Create a function that will return an array with words inside a text
    // 👉 wordArray.js
// Coding challenge #35. Create a function to convert a CSV text to a “bi-dimensional” array
    // 👉 csvToArray.js
// Coding challenge #36. Create a function that converts a string to an array of characters
var s = "Hello World";
console.log('Problem 36 => 👉', stringToArrayChar(s));
function stringToArrayChar(s)
{
    return Array.from(s);
}
// Coding challenge #37. Create a function that will convert a string in an array containing the ASCII codes of each character
console.log('Problem 37 => 👉', getCharCodes("I like JavaScript"));
function getCharCodes(txt)
{
    var arrayChar = [];
    for (var i = 0; i< txt.length; i++)
    {
        var charCode = txt.charCodeAt(i);
        arrayChar.push(charCode);
    }
    return arrayChar;
}
// Coding challenge #38. Create a function that will convert an array containing ASCII codes in a string
console.log('Problem 38 => 👉', codesToStringASCII([73, 32, 108, 105, 107, 101, 32, 74, 97, 118, 97, 83, 99, 114, 105, 112, 116]));

function codesToStringASCII(numAray) {
    return String.fromCharCode(...numAray);
}
// Coding challenge #39. Implement the Caesar cypher
// Coding challenge #40. Implement the bubble sort algorithm for an array of numbers
