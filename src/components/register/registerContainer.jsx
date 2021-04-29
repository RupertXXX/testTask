import { connect } from 'react-redux';
import { setUserInfoCreateAction, setIsRegisteredCreateAction } from '../../redux/reducers/registerReducer';
import withErrorBoundary from '../../components/HOCs/withErrorBoundary';
import {compose} from 'redux';
import Register from './register';

const mapStateToProps = (state) => {
    return {
        isRegistered: state.register.isRegistered,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserInfo: (userInfo) => {
            dispatch(setUserInfoCreateAction(userInfo))
        },
        setIsRegistered: (isRegistered) => {
            dispatch(setIsRegisteredCreateAction(isRegistered))
        },
    }
}

export default compose( withErrorBoundary, 
                        connect(mapStateToProps, mapDispatchToProps)
                        )(Register);