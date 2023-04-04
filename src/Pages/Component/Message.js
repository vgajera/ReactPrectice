import React, { Component } from 'react';

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message : 'welcome visitor'
        }
    }
    changeMessage(){
        this.setState ({
            message : 'welcome visitor you are subscribes'
        })
    }
    render() {
        return(
            <>
            <h3>{this.state.message}</h3>
            <button onClick={ () => this.changeMessage()}>Subscribe</button>
            </>
        )
    }
}

export default Message