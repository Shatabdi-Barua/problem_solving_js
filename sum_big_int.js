// Coding challenge #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
//solution-1
var n1 = "2909034221912398942349";
var n2 = "1290923909029309499";
console.log( addBigInt(n1, n2));

function addBigInt(n1, n2)
{
    var s = "";
    var carry = 0;
    var maxSize = Math.max(n1.length, n2.length);
    for(var i = 0; i < maxSize; i++)
    {
        var digit1 = digitFromRight(n1, i);
        var digit2 = digitFromRight(n2, i);

        var sum = digit1 + digit2 + carry;
        var digitSum = sum % 10;
        carry = sum >= 10 ? 1 : 0;
    }
}
function digitFromRight(num, i)
{
    
}