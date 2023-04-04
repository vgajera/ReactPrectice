import React, { Component } from 'react'

export default class ClassClick extends Component {
  clickHendler() {
    console.log('dfgdfgdfg')
  }
  render() {
    return (
      <button onClick={this.clickHendler}>ClassClick</button>
    )
  }
}
