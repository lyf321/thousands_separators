'use strict';

function thousands_separators(num) {
    var num = num.toString();

    if(num.indexOf(".")!=-1){
        var numSplit = num.split(".");
        var str = getThousnad(numSplit[0]);
        return str+"."+numSplit[1];
    } else {
        return getThousnad(num);
    }
}

function getThousnad(numSplit) {
    var str = "";
    var count = 0;

    if(numSplit.length<=3){
        return numSplit;
    } else {
        for(var i=numSplit.length-1; i>=0; i--){
            count++;
            str = numSplit[i] + str;
            if(!(count%3) && i!=0){
                str = ","+str;
            }
        }
        return str;
    }
}

module.exports = thousands_separators;
