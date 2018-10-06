/*
Student: Davide Sbetti
Assignment 2
Random Pic Task
 */

var randomNumber = Math.floor(Math.random() * 5); //Generate random number between 0 and 4

console.log("Generated number: " + randomNumber); //Used for debug purposes

var imgSrc = "imgs/randompic" + randomNumber + ".jpg"; //prepare the path of the image

var divEl = document.getElementById("picContainer"); //get the parent element

var imgEl = document.createElement("img"); //create img tag element

var srcAttr = document.createAttribute("src"); //create src attribute
srcAttr.value = imgSrc; //give the value of the src attribute, the path that was created before

imgEl.setAttributeNode(srcAttr); //set the attribute of the img tag

divEl.appendChild(imgEl); //append the img tag to the parent div