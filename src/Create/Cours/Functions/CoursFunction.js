
export function checkValidateTitle(newState, event){
    if (event.target.value.length > 1) {
        newState.value.title = event.target.value;
        if(!(newState.class.title === "valid")){
            newState.class.title = newState.class.title.replace("invalid","valid");
            newState.valid.title = true;
        }
    }
    else if(!newState.class.title.includes("invalid")) {
        newState.class.title = newState.class.title.replace("valid", "");
        newState.class.title += "invalid";
        newState.valid.title = false;
    }
    return newState;
}
export function checkValidateDescription(newState, event){
    if (event.target.value.length > 1) {
        newState.value.description = event.target.value;
        if(!(newState.class.description === "valid")){
            newState.class.description = newState.class.description.replace("invalid","valid");
            newState.valid.description = true;
        }
    }
    else if(!newState.class.description.includes("invalid")) {
        newState.class.description = newState.class.description.replace("valid", "");
        newState.class.description += "invalid";
        newState.valid.description = false;
    }
    return newState;
}

export function checkValidateProf(newState, event){
    if (event.target.value.length > 1) {
        newState.value.profName = event.target.value;
        if(!(newState.class.profName === "valid")){
            newState.class.profName = newState.class.profName.replace("invalid","valid");
            newState.valid.profName = true;
        }
    }
    else if(!newState.class.profName.includes("invalid")) {
        newState.class.profName = newState.class.profName.replace("valid", "");
        newState.class.profName += "invalid";
        newState.valid.profName = false;
    }
    return newState;
}
export function checkValidateAvatarType(newState, event) {
    newState.value.avatarType = event.target.getAttribute("valueInput");
    newState.valid.avatarType = true;
    return newState;
}
export function signup(data) {
    //todo signup with firebase
}

export function signin(data) {
    //todo signin with firebase
}