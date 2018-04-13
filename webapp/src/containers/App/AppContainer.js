import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './styles/theme/mui-theme'
import { HashRouter,
         Route,
         Redirect,
         Switch } from 'react-router-dom'

/*
 * Import global styles into entire app
 */
import './styles/app.scss'

/* actions */
import * as uiActionCreators from 'core/actions/actions-ui'

/* application containers & components */
import { HeaderContainer, LeftNavBarContainer, HomeViewContainer } from '../index'
import ModalContainer from '../Modal/ModalContainer';
import CheckoutContainer from '../Checkout/CheckoutContainer';

injectTapEventPlugin();

const styles = {
  background: {
    backgroundImage: 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
  }
};

class AppContainer extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { ui, actions } = this.props;

    return (
      <MuiThemeProvider muiTheme={muiTheme} >
        <div style={styles.background}>
          <HashRouter>
              <div>
                  <HeaderContainer />
                  <div className="container">
                      <Switch>
                          <Route path="/home" component={HomeViewContainer} />
	                        <Route path="/checkout" component={CheckoutContainer} />
                          <Redirect from="/" to="/home" />
                      </Switch>
                  </div>
                  <LeftNavBarContainer />
              </div>
          </HashRouter>
          <ModalContainer
              open={ui.showCart}
              actions={ui.modalActions}
              uiActions={actions.ui} />
        </div>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps (state) {
  return {
    ui: state.ui
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: {
      ui: bindActionCreators(uiActionCreators, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
