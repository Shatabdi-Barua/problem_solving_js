//without recursion
let f0 = 0;
let f1 = 1;
for(let i = 2; i <= 10; i++)
{
    let fi = f0 + f1;
    console.log(f0, '+', f1, '=', fi);
    f0 = f1
    f1 = fi;
}
//with recursion
console.log('With Recursion: ');
function findFibonacciNumber(num)
{
    if(num == 0)
    {
        return 0
    }
    else if(num == 1)
    {
        return 1
    }
    return findFibonacciNumber(num-1) + findFibonacciNumber(num-2)
}
var num = 10;
var fibResult = findFibonacciNumber(num)
console.log(fibResult);