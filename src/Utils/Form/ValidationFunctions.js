export function checkValidateWithSizeTab(newState, value, key, questionId, size) {
    if (value.length > size) {
        newState.value[key][questionId] = value;
        if(!(newState.class[key][questionId] === "valid")) {
            newState.class[key][questionId] = newState.class[key][questionId].replace("invalid", "valid");
            newState.valid[key][questionId] = true;
        }
    }
    else if(!newState.class[key][questionId].includes("invalid")) {
        newState.class[key][questionId] = newState.class[key][questionId].replace("valid", "");
        newState.class[key][questionId] += "invalid";
        newState.valid[key][questionId] = false;
    }
    return newState
}
export function checkValidateWithSizeTabSecondKey(newState, value, key, questionId, size, secondkey) {
    if (value.length > size) {
        newState.value[key][questionId][secondkey] = value;
        if(!(newState.class[key][questionId] === "valid")) {
            newState.class[key][questionId] = newState.class[key][questionId].replace("invalid", "valid");
            newState.valid[key][questionId] = true;
        }
    }
    else if(!newState.class[key][questionId].includes("invalid")) {
        newState.class[key][questionId] = newState.class[key][questionId].replace("valid", "");
        newState.class[key][questionId] += "invalid";
        newState.valid[key][questionId] = false;
    }
    return newState
}
export function checkValidateCompare(newState, value, dataName, valueToCompare) {
    if(value === valueToCompare){
        newState.value[dataName] = value;
        if(!(newState.class[dataName] === "valid")) {
            newState.class[dataName] = newState.class[dataName].replace("invalid", "valid");
            newState.valid[dataName] = true;
        }
    }
    else if(!newState.class[dataName].includes("invalid")) {
        newState.class[dataName] = newState.class[dataName].replace("valid", "");
        newState.class[dataName] += "invalid";
        newState.valid[dataName] = false;
    }
    return newState;
}
export function checkValidateWithRegex(newState, value, key, regex){
    if (regex.exec(value)) {
        newState.value[key] = value;
        if(!(newState.class[key] === "valid")){
            newState.class[key] = newState.class[key].replace("invalid","valid");
            newState.valid[key] = true;
        }
    }
    else if(!newState.class[key].includes("invalid")) {
        newState.class[key] = newState.class[key].replace("valid", "");
        newState.class[key] += "invalid";
        newState.valid[key] = false;
    }
    return newState;
}
export function checkValidateWithSize(newState, value, key, size){
    if (value.length > size) {
        newState.value[key] = value;
        if(!(newState.class[key] === "valid")) {
            newState.class[key] = newState.class[key].replace("invalid", "valid");
            newState.valid[key] = true;
        }
    }
    else if(!newState.class[key].includes("invalid")) {
        newState.class[key] = newState.class[key].replace("valid", "");
        newState.class[key] += "invalid";
        newState.valid[key] = false;
    }
    return newState
}
export function saveValidateValue(newState, value, key) {
    newState.value[key] = value;
    newState.valid[key] = true;
    return newState;
}
export function checkValidForm(newState) {
    newState.formValid = true;
    const arr = Object.keys(newState.valid).map(function (k) {
        return newState.valid[k]
    });
    arr.map(valid => (newState.formValid &= valid));
    return newState
}
export function checkValidTab(newState, key) {
    let valid = true;
    const arr = Object.keys(newState.valid[key]).map(function (k) {
        return newState.valid[key][k]
    });
    arr.map(validArg => (valid &= validArg));
    return valid;
}