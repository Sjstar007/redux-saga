import {createStore, applyMiddleware} from 'redux';
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";

import { onLoadPost } from "./saga";
// const middleware = [reduxThunk];
// if(process.env.NODE_ENV !== 'development'){
//     middleware.push(logger);
// }
const sagaMiddleware = createSagaMiddleware();
const middleware = [logger,sagaMiddleware];
const store = createStore(rootReducer,applyMiddleware(...middleware));

sagaMiddleware.run(onLoadPost);
export default store;