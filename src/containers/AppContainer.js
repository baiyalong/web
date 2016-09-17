import React, { Component, PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import '../styles/core.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


class AppContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }

  render() {
    const { history, routes, store } = this.props

    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <Router history={history} children={routes} />
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default AppContainer
