import "../App.css";
import { Component } from "react";
import Contacts from "./Contacts";


class App extends Component {

  constructor(props)
  {
    super(props);
    this.addContact = this.addContact.bind(this);
  }

  state = {
    contacts:[{
      name:'Ercan',
      phone:'+90 (000) 000 0000'
    },
    {
      name:'Ersoy',
      phone:'+90 (111) 111 1111'
    }
    ]
  };

  addContact(contact)
  {
    console.log(contact);

    const{contacts} = this.state;
    contacts.push(contact);

    this.setState(
      {
        contacts:contacts
      }
    );
  }

  render()
  {
    return (
      <div className="App">
        <Contacts addContact={this.addContact} contacts={this.state.contacts}/>
      </div>
    );
  }

}

export default App;
