import { useReducer } from 'react';
import { combineReducers} from 'redux';

import UserReducer from './user/user.reducer';

export default combineReducers ({
    user: useReducer
});