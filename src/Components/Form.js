import React, { Component } from 'react'


class Form extends Component {

  constructor(props){
    super(props);
  }
  state = {
    name:'',
    phone:''
  };

  onChange = (e) =>
  {
    this.setState(
      {
        [e.target.name]:e.target.value
      }
    )
  }

  onSubmit = (e) =>
  {
    e.preventDefault();
    this.props.addContact(
      {
        ...this.state
      }
    );
    this.setState(
      {
        name:'',
        phone:''
      }
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
        <input  name="name"   id="name"   onChange={this.onChange} value={this.state.name}  placeholder={"Name"}/>
        <input  name="phone"  id="phone"  onChange={this.onChange} value={this.state.phone} placeholder={"Phone"}/>
        <button>Add</button>
        </form>
        
       
      </div>
    )
  }
}


export default  Form;