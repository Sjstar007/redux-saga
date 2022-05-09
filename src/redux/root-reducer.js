import  {combineReducers} from 'redux';
import userReducer from './reducer';

const rootReducer = combineReducers({
    user_data: userReducer
})
export default rootReducer;