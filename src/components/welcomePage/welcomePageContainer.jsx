import { connect } from 'react-redux';
import withErrorBoundary from '../../components/HOCs/withErrorBoundary';
import {compose} from 'redux';
import WelcomePage from './welcomePage';

const mapStateToProps = (state) => {
    return {
        userInfo: state.register.userInfo,
        isRegistered: state.register.isRegistered,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default compose( withErrorBoundary, 
                        connect(mapStateToProps, mapDispatchToProps)
                        )(WelcomePage);