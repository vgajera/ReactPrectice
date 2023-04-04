import React, { Component } from "react";

const Greet = props =>  {
        return  (
            <>
                <h1>hellow {props.name}</h1>
                {props.children}
            </>
        )
}

export default Greet