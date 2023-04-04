import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       comments: '',
       topic: 'react'
    }
  }
  hendleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  hendlecommentChange = event => {
    this.setState({
      comments: event.target.value
    })
  }
  hendletopicChange = event => {
    this.setState({
      topic: event.target.value
    })
  }
  handleSUbmit = event => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic} `)
    event.preventDefault();
  }

  render() {
    const {username, comments, topic} = this.state
    return (
      <div>
        <form onSubmit={this.handleSUbmit}>
          <div>
            <label>Username</label>
            <input type={'text'} value={username} onChange={this.hendleUsernameChange} />
          </div>
          <div>
            <label>Comments</label>
            <textarea value={comments} onChange={this.hendlecommentChange}></textarea>
          </div>
          <div>
            <label>Comments</label>
            <select value={topic} onChange={this.hendletopicChange}>
              <option value={'react'}>React</option>
              <option value={'angular'}>Angular</option>
              <option value={'vue'}>Vue</option>
            </select>
          </div>
          <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}

export default Form