// Coding challenge #20: Rotate an array to the left 1 position
let arr_num1 = [1,2,3]
rotateArrLeft(arr_num1)
console.log('Problem 20 => 👉', arr_num1);
function rotateArrLeft(arr_num1)
{
    let first_pos = arr_num1.shift()
    arr_num1.push(first_pos)
}
// Coding challenge #21: Rotate an array to the right 1 position
let arr_num2 = [1,2,3]
rotateArrRight(arr_num2)
console.log('Problem 21 => 👉', arr_num2);
function rotateArrRight(arr_num2)
{
    let first_pos2 = arr_num2.pop()
    console.log(arr_num2);
    arr_num2.unshift(first_pos2)
}
// Coding challenge #22: Reverse an array
let arr_num3 = [1,2,3]
let arr_num_reverse = reverseArrayNum(arr_num3);
console.log('Problem 22 => 👉', arr_num_reverse);
function reverseArrayNum(arr_num3)
{
    let arr2 = []
    for (let i = arr_num3.length-1; i >= 0; i--)
    {
        arr2.push(arr_num3[i])
    }
    return arr2;
}