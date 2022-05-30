import React, { Component } from 'react';

export class Button extends Component {

    constructor(props){
        super();
        this.state = {
            title:"Click Me",
            appName:"React JS State Application",
            users:{
                "id":1,
                "name":"Sanndeip Midhilesh",
                "address":"VISAKHAPATNAM",
            }
        }
    }
render() {
    return (
      <div>
        <h1>{this.props.appName}</h1><br/>
        <h2>User Id: {this.state.users.id}</h2>
        <h3>User Name: {this.state.users.name}</h3>
        <h4>User Address: {this.state.users.address}</h4>
        <button className='btn btn-primary'>{this.props.title}</button><br/>
      </div>
    );
  }
}

export default Button;
