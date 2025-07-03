const repeatString = function(str, num) {
    let newStr = "";
    let repeat = num;
    if (repeat < 0){
        newStr = 'ERROR';
    }
    
    for (i = 0; i < repeat; i++){
        newStr += str;
    }
    return newStr;
};



// Do not edit below this line
module.exports = repeatString;
