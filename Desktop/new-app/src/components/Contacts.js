import React, { Component } from "react";
import Contact from "./Contact";
class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "Puram Calvin Job",
          email: "calvin.puram@vennit.tech",
          phone: "08069534637",
        },
        {
          id: 2,
          name: "Mercy Wumi Adams",
          email: "mercy.adams@vennit.tech",
          phone: "08065980493",
        },
        {
          id: 3,
          name: "Ganiyat Azeez Olajumoke",
          email: "ganiyat.azeez@vennit.tech",
          phone: "07087847722",
        },
      ],
    };
  }
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}
export default Contacts;

