// Coding challenge #28: Calculate the sum of first 100 prime numbers
var n = 10;
console.log("Sum of first ", n, "numbers are ", sumOfPrimes(n));

function sumOfPrimes(n)
{
    var totalPrimes =0;
    var sum = 0;
    var i = 2;
    while(totalPrimes < n)
    {         
        if(isPrime(i))
        {           
            totalPrimes++;
            sum += i;
        }
        i++;
    }
    return sum;
}

function isPrime(p)
{
    if(p == 2)
    {
        return true;
    }
    else if( p < 2)
    {
        return false;
    }
    
        var maxDiv = Math.sqrt(p);
        for(let j = 2; j<= maxDiv; j++)
        {
            if( p % j == 0)
            {
                return false;
            }
        }
    
    return true;
}