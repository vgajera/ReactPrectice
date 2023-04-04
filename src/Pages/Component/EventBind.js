import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:'hello'
    }
    this.clickhendkler = this.clickhendkler.bind(this)
  }
  // clickhendkler(){
  //   this.setState({
  //     message:'goodby'
  //   })
  // }
  clickhendkler = () =>{
    this.setState({
      message:'goodby'
    })
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
      {/* <button onClick={this.clickhendkler.bind(this)}>Clicked</button> */}
      {/* <button onClick={() => this.clickhendkler()}>Clicked</button> */}
      <button onClick={this.clickhendkler}>Clicked</button>
      </div>
    )
  }
}

export default EventBind