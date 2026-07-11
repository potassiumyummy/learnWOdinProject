const repeatString = function(input, rotation) {
    if(rotation < 0){
        return "ERROR";
    }else{
        let string = "";
        for(let i = 0; i < rotation; i++){
            string += input;
        }
        return string;
    }
};

// Do not edit below this line
module.exports = repeatString;
