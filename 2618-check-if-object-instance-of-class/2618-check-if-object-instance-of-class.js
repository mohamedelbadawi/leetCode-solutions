/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
    // first check if it's a valid class number or not
    if (obj === null || obj === undefined || typeof classFunction !== "function") {
        return false;
    }
    //check if the object is and object or not
    let inputObj = obj;
    if (typeof obj !== "object") {
        inputObj = Object(obj)
    }
    return inputObj instanceof classFunction;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */