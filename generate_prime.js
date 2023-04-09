// Coding challenge #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"
let limit = 10;
let startAt = 100;
console.log(getPrimes(limit, startAt))
function getPrimes(limit, startAt)
{
    let ar = [];
    while( ar.length < limit)
    {
        if(isPrime(startAt))
        {
            ar.push(startAt);            
        }
        startAt++;
    }
    return ar;
}
function isPrime(n)
{
    if(n < 2 )
        return false
    else if(n == 2)
        return true
    else{
        let maxDiv = Math.sqrt(n);
        for(let i = 2; i <= maxDiv; i++)
        {
            if( n % i == 0)
                return false
        }
        return true
    }
}
