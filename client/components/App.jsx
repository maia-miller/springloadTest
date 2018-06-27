import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Form from './Form'
import Confirmation from './Confirmation'

import {getCatsRequest} from '../actions/catActions'
import {getCharacteristicsRequest} from '../actions/charactersticActions'

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
      <div>
        {this.props.complete ? <Confirmation /> : <Form />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    complete: state.complete,
  }
}

export default connect()(App)
