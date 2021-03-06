import { deleteApp } from "firebase/app";

const Initial_State = {
    currentUser: null
}

const UserReducer = (state = Initial_State, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return{
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default  UserReducer;