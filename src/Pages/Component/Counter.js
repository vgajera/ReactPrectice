import React, { Component } from 'react'
class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count: 1
      }
    }
    increment(){
        this.setState({
            count: this.state.count + 1 
        },
        () => {
            console.log('callback value', this.state.count)
        }
        )
        // this.setState((prevState,props) =>({
        //     count: prevState.count + props.addValue
        // }))
        // console.log(this.state.count)
    }
    incrementFive(){
        this.increment();
    }


  render() {
    return (
      <div>
        <p>Count - {this.state.count}</p>
        <button className='btn btn-brand btn-sm' onClick={ () => this.incrementFive()}>increment</button>
     </div>
    )
  }
}

export default Counter