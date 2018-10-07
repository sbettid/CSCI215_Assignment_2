/*
    Student: Davide Sbetti
    Assignment 2
    Process text task
 */

var result = "";

function process(){

    //get the input text
    var inputText = document.getElementsByName("inputText")[0].value;

    var outputDiv = document.getElementById("output"); // get the output div
    outputDiv.innerText = ""; //Clear potentially old content

    inputText = inputText.replace(/[.,;:!?]/gi, ""); // Use a regular expression to eliminate punctuation

    inputText = inputText.toUpperCase(); //eliminate the case sensitive problem having the whole text as uppercase

    var words = inputText.split(" "); // get the single words splitting at the space character

    var wordsMap = new Map(); //Let's use a map to trace the words(keys) and counters(values)

    //And now process every word
    for(var i in words){

        var currentCount = wordsMap.get(words[i]); //get the current value of the specific word counter or undefined if not present

        if (currentCount == undefined) //if not present
            wordsMap.set(words[i], 1); //add it with 1 as counter
        else
            wordsMap.set(words[i], currentCount+1); //otherwise just increase the counter

    }

    //For each entry of the map call the printMapElements function
    wordsMap.forEach(printMapElements);

    //Create paragraph element
    var pNode = document.createElement("p");
    var pText = document.createTextNode(result); // create text content equal to the generated string

    pNode.appendChild(pText); //append text to node
    outputDiv.appendChild(pNode); //append node to output div

    result = ""; //clear string

}

//Auxiliary function that takes as input value, key and map (unused but required) and add them to the
//result string
function printMapElements(value, key, map){

    console.log(key + ": " + value); //used for debug purposes

    result += key + ": " + value + " ";
}