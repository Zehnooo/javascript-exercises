const reverseString = function(str) {
    let parentStrArray = str.split(" ");
    let test = "";
    let index = parentStrArray.length - 1;
    for (let i = index; i > -1; i--){
         let word = parentStrArray[i].toString();
         characters = word.split("").reverse().join("");
         
         
         test += characters;
         if (i !== 0){
             test += " ";
         }
    }
    
    
    
    return test;  
};






// Do not edit below this line
module.exports = reverseString;
