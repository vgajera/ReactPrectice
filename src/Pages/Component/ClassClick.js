import React, { Component } from 'react'

export default class ClassClick extends Component {
  clickHendler() {
    alert("this is clicked event ")
  }
  render() {
    return (
      <>
      <button className='btn btn-sm btn-brand' onClick={this.clickHendler}>Click Me ...</button>
      </>
    )
  }
}
