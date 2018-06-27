import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import {getCatsRequest} from '../actions/catActions'
import {getCharacteristicsRequest} from '../actions/charactersticActions'

class Confirmation extends React.Component {
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
        Your sign up has been complete! Good job!
      </div>
    )
  }
}

export default connect()(Confirmation)
