import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
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
    dispatch: (action) => this.setState((state) => reducer(state, action)),
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
