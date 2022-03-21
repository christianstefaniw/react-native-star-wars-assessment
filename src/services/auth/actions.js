import AsyncStorage from "@react-native-async-storage/async-storage";
import { Actions } from 'react-native-router-flux';
import uuid from 'react-native-uuid';

import { SET_LOGIN_ERROR, SET_EMAIL, SET_UUID } from "./types";


export function setLoginError(error) {
    return { type: SET_LOGIN_ERROR, value: error };
}

export function setEmail(email) {
    return { type: SET_EMAIL, value: email };
}

export function setUUID(uuid) {
    return { type: SET_UUID, value: uuid };
}

export function login(email) {
    return async (dispatch) => {
        const saved = await AsyncStorage.setItem('email', email)
            .then(() => {
                dispatch(setEmail(email));
                dispatch(setUUID(uuid.v4()));
                return true;
            })
            .catch((error) => {
                console.log(error);
                dispatch(setLoginError('Failed to login'));
                return false;
            });

        if (saved) 
            Actions.pilots();
    }
}

export function loginAsGuest() {
    return (dispatch) => {
        dispatch(setEmail(null));
        dispatch(setUUID(null));
        Actions.pilots();
    }
}