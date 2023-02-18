
const sumAll = function(alpha, omega) {
    
    if ((Math.sign(alpha) === -1) || (Array.isArray(omega)) || (isNaN(omega))||
    (typeof(alpha) === "string") || (typeof(omega) === "string")||  
    (Array.isArray(alpha)) || (isNaN(alpha))||
    (Math.sign(omega) === -1) ) {return "ERROR";
    } 

    let newSum = 0;
    let stepUp = alpha;
    let stepDown = omega;

    while (stepUp < omega) {
        stepUp++;
        newSum += stepUp;
        total= (alpha + newSum);
        };

    while (stepDown < alpha) {
        stepDown++;
        newSum += stepDown; 
        total= (omega + newSum);   
        };
        
    return total;
};
// Do not edit below this line
module.exports = sumAll;
