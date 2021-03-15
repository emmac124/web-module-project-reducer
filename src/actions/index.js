export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY = "MEMORY";
export const MR = "MR";
export const MEMORY_CLEAR = "MEMORY_CLEAR";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return({type: CHANGE_OPERATION, payload: operation});
}

export const clear = () => {
    return({type: CLEAR_DISPLAY})
}

export const memory = () => {
    return({type: MEMORY})
}

export const mR = () => {
    return({type: MR})
}
export const memoryClear = () => {
    return({type: MEMORY_CLEAR})
}