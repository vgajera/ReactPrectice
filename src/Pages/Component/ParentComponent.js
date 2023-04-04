import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        parentName: 'previn'
      }
      this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName} `)
    }
  render() {
    return (
      <div>
        <ChildComponent greetHendler={this.greetParent} />
      </div>
    )
  }
}

export default ParentComponent