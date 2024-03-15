//get first of two integers
const firstInteger = parseInt(prompt("Enter first of 2 integers"))

// get second of two integers
const secondInteger = parseInt(prompt("Enter second of 2 integers"))

if ((isNaN(firstInteger))||(isNaN(secondInteger))) {
    document.write( "Two numbers were not entered")
} else if (firstInteger == secondInteger) {
    document.write("The two integers are equal")
} else if (firstInteger > secondInteger) {
    document.write(firstInteger + " is the largest integer") 
} else {
    document.write(secondInteger + " is the largest integer")
}
