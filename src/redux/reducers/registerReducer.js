//import {stopSubmit} from 'redux-form';

const SET_USER_INFO = 'SET_USER_INFO';

let initialState = {
    userInfo: {
        name: null,
        secondName: null,
        fatherName: null,
        birthDate: null,
        email: null,
    },
};

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: action.userInfo,
            }
        default: return state;
    }
}

export const setUserInfoCreateAction = (userInfo) => ({ type: 'SET_USER_INFO', userInfo });

export default authReducer;