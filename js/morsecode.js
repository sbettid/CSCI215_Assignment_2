/*
    Student: Davide Sbetti
    Assignment 2
    morsecode.js
 */

//Use a map to represent the correspondence between the morse code and the english character
var morseCode = new Map();
morseCode.set(".-", "A");
morseCode.set("-...", "B");
morseCode.set("-.-.", "C");
morseCode.set("-..", "D");
morseCode.set(".", "E");
morseCode.set("..-.", "F");
morseCode.set("--.", "G");
morseCode.set("....", "H");
morseCode.set("..", "I");
morseCode.set(".---", "J");
morseCode.set("-.-", "K"); //isn't it equal to the one for C?
morseCode.set(".-..", "L");
morseCode.set("--", "M");
morseCode.set("-.", "N");
morseCode.set("---", "O");
morseCode.set(".--.", "P");
morseCode.set("--.-", "Q");
morseCode.set(".-.", "R");
morseCode.set("...", "S");
morseCode.set("-", "T");
morseCode.set("..-", "U");
morseCode.set("...-", "V");
morseCode.set(".--", "W");
morseCode.set("-..-", "X");
morseCode.set("-.--", "Y");
morseCode.set("--..", "Z");

function translate(){

    //get the input text
    var inputText = document.getElementsByName("morse")[0].value;

    //prepare output string
    var translatedText = "";

    //Parsing the text: split it based on the spaces between words (3 spaces)
    var words = inputText.split("   ");

    //now parse very single word
    for(var i in words){

        //split the current word in character
        var characters = words[i].split(" ");

        //parse every character
        for(var j in characters){
            translatedText += morseCode.get(characters[j]);
        }
        //add a blank space after the word
        translatedText += " ";

    }

    //get output div
    var outputDiv = document.getElementById("output");
    //clear old content if present
    outputDiv.innerHTML = "";

    //create a paragraph element
    var p = document.createElement("p");
    var textNode = document.createTextNode(translatedText);
    p.appendChild(textNode);

    outputDiv.appendChild(p);
}