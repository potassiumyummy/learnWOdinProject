const repeatString = function(word, repetition) {
    if(repetition < 0){
        return "ERROR";
    }else{
        let new_word = "";
        for(let i = 0; i < repetition; i++){
            new_word+=word;
        }
        return new_word;     
    }
};

// Do not edit below this line
module.exports = repeatString;
