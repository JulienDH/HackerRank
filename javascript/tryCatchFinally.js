//Try and catch structure
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
