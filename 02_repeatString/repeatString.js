const repeatString = function(str,num) {
    let holder = ""
    if(num < 0){
        return "ERROR"
    }
    for(let i=0;i<num;i++){
        holder = holder+str

    }
    return holder

};

// Do not edit below this line
module.exports = repeatString;
