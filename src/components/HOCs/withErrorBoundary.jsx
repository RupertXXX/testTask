import React from 'react';
import ErrorBoundary from '../../common/errorBoundary/errorBoundary';

const withErrorBoundary = (Component) => {
    return (props) => {
        return <ErrorBoundary>
            <Component {...props} />
        </ErrorBoundary>
    }
}

export default withErrorBoundary;