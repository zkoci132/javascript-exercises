const sumAll = function(int1,int2) {
    if(int1 < 0 || int2 < 0){
        return "ERROR"
    }
    else if(Number.isInteger(int1) === false || Number.isInteger(int2)===false){
        return "ERROR"
    }
    let max_num = Math.max(int1,int2)
    let min_num = Math.min(int1,int2)
    let sum = 0

    for(let i = min_num;i<max_num+1;i++){
        sum = sum + i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
