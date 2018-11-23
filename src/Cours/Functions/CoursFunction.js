
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


export function signup(data) {
    //todo signup with firebase
}

export function signin(data) {
    //todo signin with firebase
}