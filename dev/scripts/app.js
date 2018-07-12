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

  databaseInfo(dataFromChild) {
    console.log(dataFromChild);
    
    // this.setState({
    //   data: dataFromChild
    // });
  }

  // get the value of the user keystroke, hold in state
  updateSearch(e) {
    const userInput = e.target.value.substr(0, 30);
    this.setState({
      search: userInput
    });
  }

  render() {
    
    // let filteredData = this.props.data.filter(
    //   (user) => {
    //     return user.firstname.indexOf(this.state.search) !== -1;
    //   }
    // );
    return <div>
        <h1>Search It!</h1>
        <label>Search a name!</label>
        {/* i did the filtering here instead? */}
        {/* <ul>
          {this.props.data.map((`${data.first} ${data.last}`) => {
            return <FilterUsers users={this.databaseInfo} key={users.id} />;
          })}
        </ul> */}

        <FilterUsers users={this.databaseInfo} />
        <input type="text" value={this.state.search} onChange={this.updateSearch} />
        <ul />
      </div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
