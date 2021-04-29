import registerReducer from './reducers/registerReducer';
import appReducer from './reducers/appReducer';
import {reducer as formReducer} from 'redux-form'

import { createStore, combineReducers } from 'redux';

let reducers = combineReducers({
    register: registerReducer,
    app: appReducer,
    form: formReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;