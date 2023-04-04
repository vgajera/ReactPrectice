import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {
    
    return(
        this.state.isLoggedIn ?(
            <div>welcome vishal</div>
        ):(
        <div>welcome geust</div>
        )
    )
    // if(this.state.isLoggedIn){
    //     message = <div>welcome vishal</div>
    // }else{
    //     message = <div>welcome geust</div>
        
    // }
    //return <div>{message}</div>
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome vishal</div>
        //     )
        // }
        // else{
        //     return(
        //         <div>welcome geust</div>
        //     )
        // }
      return (
        <div>

        </div>
    )
  }
}

export default UserGreeting