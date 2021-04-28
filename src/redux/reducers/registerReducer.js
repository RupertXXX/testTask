import {stopSubmit} from 'redux-form';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_AUTH_USER_MESSAGES = 'SET_AUTH_USER_MESSAGES';
const CLEAR_AUTH_USER_DATA = 'CLEAR_AUTH_USER_DATA';
const LOGIN_IS = 'LOGIN_IS';
const LOGIN_IS_NOT = 'LOGIN_IS_NOT';
const SET_CAPTCHA = "SET_CAPTCHA"

let initialState = {
    isLogin: false,
    messages: [],
    data: {
      id: null,
      email: null,
      login: null,
    },
    urlCaptcha: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                data: action.data,
            }
        case SET_AUTH_USER_MESSAGES:
            return {
                ...state,
                messages: action.messages,
            }
        case CLEAR_AUTH_USER_DATA: 
            return {
                ...state,
                data: {
                    id: null,
                    email: null,
                    login: null
                },
                isLogin: false,
            }
        case LOGIN_IS:
            return {
                ...state,
                isLogin: true,
            }
        case LOGIN_IS_NOT:
            return {
                ...state,
                isLogin: false,
            }
        case SET_CAPTCHA:
            return {
                ...state,
                urlCaptcha: action.url,
            }
        default: return state;
    }
}

const setAuthUserDataCreateAction = (id, email, login) => ({ type: 'SET_AUTH_USER_DATA', data: {id, email, login} });
const setAuthUserMessagesCreateAction = (messages) => ({ type: 'SET_AUTH_USER_MESSAGES', messages });
const clearAuthUserDataCreateAction = () => ({type: 'CLEAR_AUTH_USER_DATA'})
const loginIsCreateAction = () => ({type: 'LOGIN_IS'});
const loginIsNotCreateAction = () => ({type: 'LOGIN_IS_NOT'});
const setCaptchaURL = (url) => ({type: "SET_CAPTCHA", url})

export default authReducer;