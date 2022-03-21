import { SET_LOGIN_ERROR, SET_EMAIL } from "./types";

export default function authReducer(state = [], action) {
    switch (action.type) {
        case SET_EMAIL:
            return {
                ...state,
                email: action.value,
            }
        case SET_LOGIN_ERROR:
            return {
                ...state,
                loginError: action.value,
            }
        default:
            return state;
    }
}