import React from 'react'
import {connect} from 'react-redux'

import {postEmail} from '../actions/formActions'
// import {getCharacteristicsRequest} from '../actions/charactersticActions'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      validEmail: true,
      validPass: true,
      validColour: true,
      email: '',
      password: '',
      colour: '',
      animals: [],
      animalType: ''
    }
    this.handleEmail = this.handleEmail.bind(this)
    this.validateEmail = this.validateEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleColour = this.handleColour.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleEmail(e) {
    if (this.validateEmail(e.target.value)) {
      this.setState({validEmail: true})
      this.setState({email: e.target.value})
    } else {
      this.setState({validEmail: false})
    }
  }

  validateEmail(email) {
  let regex = /[^\s@]+@[^\s@]+\.[^\s@]+/
  return regex.test(email)
  }

  handlePassword(e) {
    if(e.target.value.length >= 8) {
      this.setState({password: e.target.value})
      this.setState({validPass: true})
    } else {
      this.setState({validPass: false})
    }
  }

  handleColour(e) {
  let currentState = this.state
  currentState[e.target.name] = e.target.value
  this.setState(currentState)
}

  handleAnimal(e) {
    if (!this.state.animals.includes(e.target.value)) {
      this.setState({animals: this.state.animals.push(e.target.value)})
    } else {
      let animalArr = this.state.animals.filter(animal => animal !== e.target.value)
      this.setState({animals: animalArr})
    }
    console.log('state', this.state.animals)
  }

  handleSubmit() {
    if(this.state.colour == false) {
      this.setState({validcolour: false})
    } else {
      postSubmit()
    }
  }

  render() {
    // console.log('state', this.state)
    return (
        <form method='post' action=''>
            <h1>Fill out this awesome form</h1>
            <fieldset>
                <h3>Your details</h3>
                <p>
                    <label className='label' for='email'>
                        Email
                    </label>
                    <input type='text' id='email' name='email' onChange={(e) => this.handleEmail(e)}/>
                    <div className={this.state.validEmail ? "hide" : "error"}>
                        Please enter valid email address
                    </div>
                </p>
                <p>
                    <label className='label' for='password'>
                        Password
                    </label>
                    <input className='error' type='password' id='password' name='password' onChange={(e) => this.handlePassword(e)}/>
                    <div className={this.state.validPass ? "hide" : "error"}>
                        Password must be at least 8 characters long
                    </div>
                </p>
            </fieldset>

            <fieldset>
                <h3>Your animal</h3>
                <p>
                    <label className='label' for='colour'>
                        Colour
                    </label>
                    <select name='colour' id='colour' onChange={(e) => this.handleColour(e)}>
                        <option value=''>Choose colour</option>
                        <option value='blue'>Blue</option>
                        <option value='green'>Green</option>
                        <option value='red'>Red</option>
                        <option value='black'>Black</option>
                        <option value='brown'>Brown</option>
                    </select>
                    <div className={this.state.validColour ? "hide" : "error"}>
                        You must select a colour
                    </div>
                </p>
                <p>
                    <span className="label">
                        Animal
                    </span>

                    <input type='checkbox' name='animal' value='bear' id='bear' onChange={(e) => this.handleAnimal(e)}/>
                    <label for='bear'>
                         Bear
                    </label>

                    <input type='checkbox' name='animal' value='tiger' id='tiger' onChange={(e) => this.handleAnimal(e)}/>
                    <label for='tiger'>
                        Tiger
                    </label>

                    <input type='checkbox' name='animal' value='snake' id='snake' onChange={(e) => this.handleAnimal(e)}/>
                    <label for='snake'>
                         Snake
                    </label>

                    <input type='checkbox' name='animal' value='donkey' id='donkey' onChange={(e) => this.handleAnimal(e)}/>
                    <label for='donkey'>
                         Donkey
                    </label>

                </p>
                <p>
                    <label className='label' for='tiger_type'>
                        Type of tiger
                    </label>
                    <input type='text' name='tiger_type' id='tiger_type' />
                </p>
            </fieldset>
            <fieldset>
                <p>
                    <input type='submit' value='Create account' />
                </p>
            </fieldset>
        </form>

    )
  }
}

export default connect()(Form)