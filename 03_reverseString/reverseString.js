const reverseString = function(str) {
    
    let revHolder = ""
    for(let idx=getLength(str)-1;idx > -1;idx--){
        revHolder = revHolder + str[idx]
    }
    return revHolder

};

function getLength(str){
    let sum = 0
    for(x in str){
        sum = sum + 1
    }
    return sum 
}

// Do not edit below this line
module.exports = reverseString;
