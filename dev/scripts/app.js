import React from 'react';
import ReactDOM from 'react-dom';
import faker from "faker";
import getFilteredUsers from "../server";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
    }
    this.updateSearch = this.updateSearch.bind(this);
  }

  // get the value of the user keystroke, hold in state
  updateSearch(e) {
    const userInput = e.target.value.substr(0,30);
    this.setState({
      search: userInput,
    })
  }



  render() {
    // let filteredContacts = this.contacts;
    return (
      <div>
        <h1>Search It!</h1>
        <label>Search a name!</label>
        <input type="text" 
          value={this.state.search}
          onChange={this.updateSearch}
        />
        <ul>
          {/* {filteredContacts.map((contact) => {
            return <Contact contact={contact}
            key={contact.id}
            />
          })} */}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
