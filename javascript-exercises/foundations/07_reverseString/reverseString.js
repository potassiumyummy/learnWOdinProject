const reverseString = function(input) {
    const arr = [...input];

    arr.reverse();

    const conjoinedTwins = arr.join("");

    return conjoinedTwins;
};

// Do not edit below this line
module.exports = reverseString;
