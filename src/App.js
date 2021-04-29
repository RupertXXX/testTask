import React, { PureComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Register from './components/register/register'
import NotFound from './components/notFound/notFound'
import c from './app.module.css';
import ErrorBoundary from './common/errorBoundary/errorBoundary';

class App extends PureComponent {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    console.error(promiseRejectionEvent);
  }
  componentDidMount() {
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  render() {
    return (
      <div className={c.app}>
        <Switch>
          <Route exact path='/' render={ () => <Redirect to='/register' /> } />
          <Route path='/register' render={ () => <ErrorBoundary  name="webpage"> <Register /> </ErrorBoundary> } />
          <Route path='*' render={ () => <NotFound /> } /> 
        </Switch>
      </div>
    );
  }
}

export default App;