// Coding challenge #18: Print the first 100 prime numbers
printPrimes(100)
function printPrimes(limits) //prints first 100 prime numbers
{
    let serial_number = 1;
    let num = 2
    while(serial_number <= limits )
    {
        if(isPrime(num))
        {
            console.log(serial_number, '. ', num);
            serial_number++;
        }
        num++;
    }
}
// returns if a number is prime or not
function isPrime(num)
{
    if(num < 2)
        return false
    else if(num == 2)
        return true
    else{
        let maxDiv = Math.sqrt(num)
        for (let i = 2; i <= maxDiv; i++)
        {
            if( num % i == 0)
                return false
        }
        return true;
    }
}