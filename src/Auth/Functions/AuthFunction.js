
const regExEmailUniv = new RegExp('^[a-zA-Z0-9.!#$%&    ’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]*univ([a-zA-Z0-9-]*)\\.([a-zA-Z0-9-]+)', 'i');

export function checkValidateEmail(newState, event){
    if (regExEmailUniv.exec(event.target.value)) {
        newState.value.email = event.target.value;
        if(!(newState.class.email === "valid")){
            newState.class.email = newState.class.email.replace("invalid","valid");
            newState.valid.email = true;
        }
    }
    else if(!newState.class.email.includes("invalid")) {
        newState.class.email = newState.class.email.replace("valid", "");
        newState.class.email += "invalid";
        newState.valid.email = false;
    }
    return newState;
}
export function checkValidatePassword(newState, event){
    if (event.target.value.length > 6) {
        newState.value.password = event.target.value;
        if(!(newState.class.password === "valid")) {
            newState.class.password = newState.class.password.replace("invalid", "valid");
            newState.valid.password = true;
        }
    }
    else if(!newState.class.password.includes("invalid")) {
        newState.class.password = newState.class.password.replace("valid", "");
        newState.class.password += "invalid";
        newState.valid.password = false;
    }
    return newState
}
export function checkValidateTypeAccount(newState, event){
    newState.value.typeAccount = event.target.getAttribute("valueInput");
    newState.valid.typeAccount = true;
    return newState;
}
export function checkValidateAgreeCGU(newState, event){
    newState.value.agreeCGU = event.target.checked;
    newState.valid.agreeCGU = event.target.checked;
    return newState;
}
export function checkValidateRePassword(newState, event) {
    if(event.target.value === newState.value.password){
        newState.value.repassword = event.target.value;
        if(!(newState.class.repassword === "valid")) {
            newState.class.repassword = newState.class.repassword.replace("invalid", "valid");
            newState.valid.repassword = true;
        }
    }
    else if(!newState.class.repassword.includes("invalid")) {
        newState.class.repassword = newState.class.repassword.replace("valid", "");
        newState.class.repassword += "invalid";
        newState.valid.repassword = false;
    }
    return newState
}

export function signup(data) {
    //todo signup with firebase
}

export function signin(data) {
    //todo signin with firebase
}