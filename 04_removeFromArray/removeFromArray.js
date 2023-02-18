const removeFromArray = function(myArray,...removals) {
    myArray = myArray.filter((Element) => !removals.includes(Element));
    return(myArray);
    
};





// Do not edit below this line
module.exports = removeFromArray;
