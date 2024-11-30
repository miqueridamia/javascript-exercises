const repeatString = function(string, num) {
    const singleString = string
    if (num === 0) {
        string = '';
    }
    else if (num < 0){
        string = 'ERROR';

    }
    else {
        for(let i = 1; i<num; i++) {
            string += singleString;
        }
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
