import {call, put, takeEvery, takeLatest} from "redux-saga/effects";
import {loadPostSuccess ,loadPostFail} from './actions';
import * as types from './actionType';
import {loadPostApi} from './api';
export function* onLoadPostStartAsync(){
    try{
        const response =  yield call(loadPostApi);
        yield put(loadPostSuccess(response.data));
    }catch(error){
        yield put(loadPostFail(error));
    }
}

export function* onLoadPost(){
    yield takeLatest("LOAD_POST_START",onLoadPostStartAsync);
}