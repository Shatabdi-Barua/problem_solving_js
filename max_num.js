// Coding challenge #13: Find the maximum number in an array of numbers
let arr = [-200, 100, -10000, 900]
let maxNum = findMax(arr);
console.log(maxNum);
function findMax(arr)
{
    let max = arr[0];
    for(let i = 0; i <= arr.length; i++)
    {
        if(arr[i] > max)
        {
            max = arr[i]
        }
    }
    return max;
}