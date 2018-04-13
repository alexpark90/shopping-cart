import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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
import { HeaderContainer, HomeContainer, CheckoutContainer } from '../index'
import ModalContainer from '../Cart/CartContainer';

const styles = {
  background: {
	  backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
	  paddingBottom: 100
  }
};

class AppContainer extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { ui } = this.props;

    return (
      <MuiThemeProvider muiTheme={muiTheme} >
        <div style={styles.background}>
          <HashRouter>
              <div>
                  <HeaderContainer />
                  <div className="container">
                      <Switch>
                          <Route path="/home" component={HomeContainer} />
	                        <Route path="/checkout" component={CheckoutContainer} />
                          <Redirect from="/" to="/home" />
                      </Switch>
                  </div>
		              <ModalContainer open={ui.showCart} />
              </div>
          </HashRouter>
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
