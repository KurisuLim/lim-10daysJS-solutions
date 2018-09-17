/*
    Print the following three lines of output:
    1. On the first line, prints the sum of firstInterger and the interger
    representation of secondInterger.
    2.On the second line, print the sum of firstDecimal and the floating-point
    represenation of secondDecimal.
    3.On the third line, print firstStrong concatenated with secondString.
    You must print firstString before secondString.
*/

function performOperation(secondInterger, secondDecimal, secondString){
    let firstInterger = 4;
    secondInterger = firstInterger + parseInt(secondInterger);
    console.log(secondInterger);
    let firstDecimal = 4.0;
    secondDecimal = firstDecimal + parseFloat(secondDecimal);
    console.log(secondDecimal);
    let firstString ='HackerRank ';
    secondString = firstString + secondString;
    console.log(secondString);
    
}