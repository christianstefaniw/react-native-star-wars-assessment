import { combineReducers } from 'redux';

import authReducer from '../services/auth/reducer';
import starshipReducer from '../services/starships/reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    ships: starshipReducer,
})

export default rootReducer;