// Coding challenge #24: Create a function that will merge two arrays and return the result as a new array
var arr1 = [1,2,3]
var arr2 = [4,5,6]
console.log('Problem 24 => 👉', arrayMerge(arr1, arr2));

function arrayMerge(arr1, arr2)
{
    var full_array = [];

    for(let elem1 of arr1)
    {
        full_array.push(elem1)
    }
    for(let elem2 of arr2)
    {
        full_array.push(elem2)
    }
    return full_array;
}

// Coding challenge #25: Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
var arr11 = [1,2,3]
var arr22 = [1,2,4,5,6]
console.log('Problem 25 => 👉', arrayIntersection(arr11, arr22));
function arrayIntersection(arr11, arr22)
{
    let total_array = [];
    for(let el1 of arr11)
    {
        if(!arr22.includes(el1))
        {
            total_array.push(el1);
        }
    }
    for(let el2 of arr22)
    {
        if(!arr11.includes(el2))
        {
            total_array.push(el2);
        }
    }
    return total_array;
}
// Coding challenge #26: Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
console.log('Problem 26 => 👉', arrayMergeLeft(arr11, arr22));
function arrayMergeLeft(arr11, arr22)
{
    let array_left = [];
    for(let elem11 of arr11)
    {
        if(!arr22.includes(elem11))
        {
            array_left.push(elem11)
        }
    }
    return array_left;
}
