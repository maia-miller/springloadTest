import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Form from './Form'
import Confirmation from './Confirmation'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    //bind
  }
//functions

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Form} />
          {this.props.complete && <Route exact path="/complete" component={Confirmation} /> }
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    complete: state.complete,
  }
}

export default connect()(App)
