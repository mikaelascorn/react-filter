import React from 'react';
import ReactDOM from 'react-dom';
import faker from "faker";
import getFilteredUsers from "../server";
import FilterUsers from "../server/index";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      data: []
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.databaseInfo = this.databaseInfo.bind(this);
  }

  componentDidMount(users) {
    <FilterUsers onLoad={this.users}/>;
    console.log(this.users);
  }

  databaseInfo() {
    <FilterUsers onChange={this.users} />;
    this.updateSearch(this.props.users);
    console.log(this.props.users);   
  }

  // get the value of the user keystroke, hold in state
  updateSearch(e) {
    const userInput = e.target.value.substr(0, 30);
    // this.databaseInfo(userInput);
    console.log(this.props.users);   
    this.setState({
      search: userInput
    });
  }

  render() {
    return (
      <div>
        <h1>Search It!</h1>
        <label>Search a name!</label>
        <FilterUsers childFunction={this.updateSearch} value={this.users} />
        <FilterUsers updateSearch={this.props.users}/>
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch}
        />
        <ul />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
