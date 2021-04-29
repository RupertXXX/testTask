import { connect } from 'react-redux';
import { setUserInfoCreateAction } from '../../redux/reducers/registerReducer';
import withErrorBoundary from '../../components/HOCs/withErrorBoundary';
import {compose} from 'redux';

const mapStateToProps = (state) => {
    return {
        userInfo: state.register.userInfo,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserInfo: (userInfo) => {
            dispatch(setUserInfoCreateAction(userInfo))
        },
    }
}

export default compose( withErrorBoundary, 
                        connect(mapStateToProps, mapDispatchToProps)
                        )(News);