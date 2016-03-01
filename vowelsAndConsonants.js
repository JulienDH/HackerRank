// separate woyels and consonants from a string var
// s = "javascriptloops"
function vowelsAndConsonants(s) {
    var vowels = "";
    var consonants = "";
    for (var element of s){
        if (element == "a" || element == "e" || element == "i" || element == "o" || element == "u"){
            vowels += element + "\n";
        }
        else {
            consonants += element + "\n";
        }
    }
    var i = vowels + consonants;
    console.log(i);
}
