/*
Task:
Implement a function named factorial that has one parameter: an interger, n. 
It must return the value of!
(i.e.,n factorial)
*/

function factorial(n){
    if(n > 1){
        return n * factorial(n-1);
    }
    //if number is less than 1, then it will return 1
    return 1;
}