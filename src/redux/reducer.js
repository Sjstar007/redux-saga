import * as types from './actionType';

const initialState = {
    users: [],
    user: {},
    loading: false
}
const userReducer = (state = initialState,action) =>{
    switch(action.type){
        case types.GET_USERS:
            return{
                ...state,
                users: action.payload,
                loading: false,
            }
        case types.DELETE_USER:
            const index = state.users.findIndex(data => data.id === action.deleted_id);
            state.users.splice(index, 1);
            console.log(state)
            return{
                ...state,
                loading: false,
            }
        case types.EDIT_USER:
            let index1 = state.users.findIndex(data => data.id === action.id);
            state.users[index1] = action.payload;
            console.log(state.users)
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
};

export default userReducer;