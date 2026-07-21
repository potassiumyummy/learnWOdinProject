const removeFromArray = function(array, ...anyArgs) {
    return array.filter(element => !anyArgs.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
