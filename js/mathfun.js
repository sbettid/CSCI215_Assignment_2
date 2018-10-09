/*
    Stundet: Davide Sbett
    Assignment 2
    Mathfun
 */
var input; //single number inserted
var numbers = []; //array containing all numbers
var max = -1, min, mean = 0; //variables for max, min and mean

var count = 0; //used to count number of elements (indexes)
do{
    //Take user number as input
    input =  parseInt(prompt("Please insert a positive number or -1 to terminate"));

    //if it is a valid number and therefore different than minus
    if(input > -1){
        //add it to the array of numbers
        numbers[count] = input;
        //add it to the mean
        mean += input;

        //if it is bigger than the max found so far, set it as max
        if( input > max) {
            max = input;
        }

        //if min is undefined or it is less than it, set it as min
        if (min == undefined || input < min) {
            min = input;
        }
        //increment to have the index of the next number
        count++;
    }

    //Next number!
} while(input != -1);

//Calculate mean
mean = mean / (count);

document.write("Max: " + max + "<br>");
document.write("Min: " + min + "<br>");
document.write("Mean: " + mean + "<br>");