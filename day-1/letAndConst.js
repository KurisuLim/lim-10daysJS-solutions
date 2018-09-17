/*
Task:
1.Declare a const variable, PI, and assign it the value Math.PI. You will
not pass this challenge unless the variable is declared as a constant 
and named PI(uppercase).
2.Read a number, r, donoting the radius of a circle from stdin.
3.Use PI and r to calculate the area and the perimeter of a circle having
radius r.
4.Print area as the first line of output and print perimeter as the second line
of output.
*/

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    let r = parseFloat(readLine());

    // Print the area of the circle:
    let area = PI * (r * r);
    console.log(area);
    
    // Print the perimeter of the circle:
    let perimeter = 2 * PI * r;
    console.log(perimeter);
}