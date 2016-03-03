//Try and catch structure

//Example 1
//How to reverse a string variable

var my_string = "abcd"

try {
    var new_string = my_string.split(``).reverse().join(``)
    console.log("Reversed string is : " + new_string)
}
catch (error){
    console.log("Error : " + error.message)
}
finally {
   console.log("Type of my_string is : " + (typeof my_string))
}


//Example 2
//How to evaluate a number
try {
    if (my_height/2 === NaN){
        throw new Error("notANumberError");
    }
    if (my_height > 10){
        throw new Error("hugeHeightError");
    }
    if (my_height < 4){
        throw new Error("tinyHeightError");
    }
    console.log(my_height)
}
catch (error){
    if (error.message == "notANumberError")
        console.log(error.message)
    if (error.message == "hugeHeightError")
        console.log(error.message)
    if (error.message == "tinyHeightError")
        console.log(error.message)
}
