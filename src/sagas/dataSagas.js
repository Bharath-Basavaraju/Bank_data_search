import * as actionNames from "../utils/actionNames";
import { call, put, takeEvery, takeLatest} from "redux-saga/effects";
import * as actions from '../actions/searchActions';
import { fetchData } from "./api";

function* fetchRecords(action){
    try {
        // do api call
        let searchparm = "?city="+action.selectedCity.toUpperCase();
        let  bankRecords = yield call(fetchData,searchparm);
        yield put(actions.setRecords(bankRecords)); 
        yield put(actions.getSetIFsc(bankRecords)); 
      } catch (e) {
          //if fails trigger this action
        yield put(actions.apiFailed(e)); 
      }
}

function* DataSagas(){
    yield takeLatest(actionNames.CITY_CHANGE, fetchRecords);
}

export default DataSagas;