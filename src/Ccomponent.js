import React, { Component } from 'react'
import Menu from './Menu'

export default class Ccomponent extends Component {
     constructor(props){
         super(props)

         this.state = {
             name : "serg"
         };
        this.handleClick = this.handleClick.bind(this);
     }
     handleClick(){
         this.setState({
             name: "Petro"
         })
     }

    render() {
        return (
            <div>

                <h1>Class component {this.state.name} </h1>
                <button onClick={this.handleClick}>Click</button> 
            </div>
        );
    }
}
