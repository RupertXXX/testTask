//import {stopSubmit} from 'redux-form';

const SET_USER_INFO = "SET_USER_INFO";
const SET_IS_REGISTERED = "SET_IS_REGISTERED"

let initialState = {
    userInfo: {
        name: null,
        secondName: null,
        fatherName: null,
        birthDate: null,
        email: null,
    },
    isRegistered: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: action.userInfo,
            }
        case SET_IS_REGISTERED:
            return {
                ...state,
                isRegistered: action.isRegistered,
            }
        default: return state;
    }
}

export const setUserInfoCreateAction = (userInfo) => ({ type: "SET_USER_INFO", userInfo });
export const setIsRegisteredCreateAction = (isRegistered) => ({type: "SET_IS_REGISTERED", isRegistered });

export default authReducer;