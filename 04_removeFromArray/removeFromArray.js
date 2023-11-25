const removeFromArray = function(arr,...moreArgs) {
    
    for(let idx1=0;idx1<arr.length;idx1++){
        for(let idx=0;idx<moreArgs.length;idx++){
            if(arr[idx1] === moreArgs[idx]){

                arr.splice(idx1,1)
                idx1=idx1-1
            }
        }

    }
    
    return arr

};

// Do not edit below this line
module.exports = removeFromArray;
