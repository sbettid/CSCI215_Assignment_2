/*
    Stundet: Davide Sbett
    Assignment 2
    Mathfun
 */
var input; //single number inserted
var numbers = []; //array containing all numbers
var max = 0, min = undefined, mean = 0; //variables for max, min and mean
var primeNumber = 0, even = 0, odd = 0, power2 = 0;

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
        if ( min == undefined || input < min) {
            min = input;
        }


        //check if it is even or odd
        if( input % 2 == 0)
            even++;
        else
            odd++;

        //Check if it is power of two
        if(Number.isInteger(Math.log2(input)))
            power2++;

        //Check if it is prime
        //try remove array

        var prime = true;
        for(var i = 2; i<input; i++){
            if(input % i == 0)
                prime = false;
        }

        if(prime)
            primeNumber++;

        //increment to have the index of the next number
        count++;
    }

    //Next number!
} while(input != -1);

//If we have no numbers set the mean to 0 to be consistent with the other numbers displayed
if(numbers.length == 0)
    min = 0;
//Calculate mean only if we have numbers
if(count > 0)
    mean = mean / (count);

//sort the array to find the median
numbers.sort(function (a,b) {
    return a-b; //The result of the comparative function is positive if the first is bigger, negative if it is smaller or zero if equal
});


//now find the median number
//if we have an odd number of integers just take the one in the middle
var median = 0;

if(numbers.length == 0)
    median = 0;     //if we have no numbers
else if(numbers.length % 2 != 0)
    median = numbers[(numbers.length-1)/2];
else{ // add the two numbers in the middle and divide by two

    var first = Math.floor((numbers.length-1)/2); //left-most number of the middle pair
    var second = Math.ceil((numbers.length-1)/2);//right-most number of the middle pair

    median = (numbers[first] + numbers[second])/2;
}


//Now add the numbers to the page
var numberString = "";
for(var i in numbers)
    numberString += " " + numbers[i];

document.getElementById("numbers").innerText = numberString;

//Add all statistical data to the corresponding cell in the table

document.getElementById("max").innerText = max;
document.getElementById("min").innerText = min;
document.getElementById("mean").innerText = mean;
document.getElementById("median").innerText = median;
document.getElementById("even").innerText = even;
document.getElementById("odd").innerText = odd;
document.getElementById("prime").innerText = primeNumber;
document.getElementById("power2").innerText = power2;