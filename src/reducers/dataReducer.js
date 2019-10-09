import {Map} from "immutable";
import * as helperFnc from "../utils/helperFunction";
import * as ActionNames from '../utils/actionNames';

const initialState = Map({
   cityList: [
                { key: "BANGALORE", value: "BANGALORE", text: "Bangalore"},
                { key: "MUMBAI", value: "MUMBAI", text: "Mumbai"},
                { key: "KOLKATA", value: "KOLKATA", text: "Kolkata"},
                { key: "PUNE", value: "PUNE", text: "Pune"},
                { key: "DELHI", value: "DELHI", text: "Delhi"}
            ],
    selectedCity: null,
    ifscList: null,
    bankName: null,
    bankRecords: null
});

export function DataReducer(state = initialState, action){
    switch(action.type){
        case ActionNames.API_FAILED: {
            return state.set("apiFailed", action.event);
        }

        case ActionNames.CITY_CHANGE: {
            state = state.set("selectedCity", action.selectedCity);
            return state;
        }

        case ActionNames.SET_RECORDS: {
            state = state.set("bankRecords", action.bankRecords);
            return state;
        }

        case ActionNames.SET_IFSC: {
            let iFSCList = helperFnc.getIFSCCode(action.bankRecords);
            state = state.set("ifscList", iFSCList);
            return state;
        }

    }
    return state;
}