import * as ActionNames from "../utils/actionNames";

export function apiFailed(e){
    return{
        type: ActionNames.API_FAILED,
        event: e
    }
}

export function setRecords(bankRecords){
    return{
        type: ActionNames.SET_RECORDS,
        bankRecords
    }
}

export function cityChange(selectedCity){
    return {
        type: ActionNames.CITY_CHANGE,
        selectedCity
    }
}

export function getSetIFsc(bankRecords){
    return{
        type: ActionNames.SET_IFSC,
        bankRecords
    }
}

