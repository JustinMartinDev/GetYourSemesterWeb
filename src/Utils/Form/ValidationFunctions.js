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
export function checkValidateCompare(newState, value, dataname, valueToCompare) {
    if(value === valueToCompare){
        newState.value[dataname] = value;
        if(!(newState.class[dataname] === "valid")) {
            newState.class[dataname] = newState.class[dataname].replace("invalid", "valid");
            newState.valid[dataname] = true;
        }
    }
    else if(!newState.class[dataname].includes("invalid")) {
        newState.class[dataname] = newState.class[dataname].replace("valid", "");
        newState.class[dataname] += "invalid";
        newState.valid[dataname] = false;
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