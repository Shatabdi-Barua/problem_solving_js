// Coding challenge #27: Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
/******* Solution-1 ***************/
var arr33 = [1, 2, 3, 6, -1, 2, 3, 9, 7, 10, -1, 100]
console.log(getDistinctElements(arr33));
function getDistinctElements(arr33)
{
    var new_arr = []
    for(let i = 0; i<arr33.length; i++ )
    {
        if(!inArray(arr33[i], new_arr))
        {
            new_arr.push(arr33[i])
        }
    }
    return new_arr;
}

function inArray(n, new_arr)
{
    for(let j=0; j < new_arr.length; j++)
    {
        if(new_arr[j] == n)
        {
            return true
        }        
    }
    return false
}