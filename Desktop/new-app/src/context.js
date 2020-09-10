import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
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

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
