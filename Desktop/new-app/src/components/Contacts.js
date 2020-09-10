import React, { Component } from "react";
import Contact from "./Contact";
class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: " Puram Calvin Job",
        email: " calvin.puram@vennit.tech",
        phone: " 08069534637",
      },
      {
        id: 2,
        name: " Mercy Wumi Adams",
        email: " mercy.adams@vennit.tech",
        phone: " 08065980493",
      },
      {
        id: 3,
        name: " Ganiyat Azeez Olajumoke",
        email: " ganiyat.azeez@vennit.tech",
        phone: " 07087847722",
      },
    ],
  };

  deleteContact = (id) => {
    const { contacts } = this.state;

    const newContacts = contacts.filter((contact) => contact.id !== id);
    this.setState({
      contacts: newContacts,
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}
export default Contacts;
