// Coding challenge #31a. Create a function that will return the number of words in a text
//solution - 1
console.log("number of words are ", countTextWords("text"));
console.log("\nnumber of words are ", countTextWords(" text "));
console.log("\nnumber of words are ", countTextWords(" text1,text2"));
function countTextWords(text)
{
    var wasSeparator = true;
    var words = 0;

    for (var t of text)
    {
        if(isSeparator(t))
        {
            wasSeparator = true;
            continue;
        }
        if(wasSeparator)
        {
            words++;
            wasSeparator = false
        }
    }
    return words;
}
function isSeparator(t)
{
    var separators = [" ", ".",",","\t","\n","\r",";","!","?",":"];
    return separators.includes(t);
}
// Coding challenge #34. Create a function that will return an array with words inside a text
