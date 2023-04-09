// Coding challenge #35. Create a function to convert a CSV text to a “bi-dimensional” array
var data = "John;Smith;954-000-0000\nMich;Tiger;305-000-0000\nMonique;Vasquez;103-000-0000";

var ar = csvToArray(data);
console.log("rdf", JSON.stringify(ar));

function csvToArray(data) {
    var dataLines = data.split("\n"); //['John;Smith;954-000-0000', 'Mich;Tiger;305-000-0000', 'Monique;Vasquez;103-000-0000']
    
    for(var i = 0; i < dataLines.length; i++)
    {
        var lines = dataLines[i].split(";"); //(3) ['John', 'Smith', '954-000-0000'].....              
        dataLines[i] = lines;          
    }
    return dataLines;
}
