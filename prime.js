function isPrime(n)
{
    if(n < 2)
        return false;
    else if(n == 2)
        return true;
    else{
        let maxDiv = Math.sqrt(n);
        for(let i=2; i<=maxDiv; i++)
        {
            if(n % i == 0)
                return false            
        } 
        return true;
    }    
}
let n = 6;
let result = isPrime(n);
console.log(result)