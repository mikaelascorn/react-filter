import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import filterUsers from "../server/index";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      data: [],
      displayData: [],
      clickData: []
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.dataSearch = this.dataSearch.bind(this);
  }

  componentDidMount() {
    const allData = filterUsers();
    this.setState({
      data: allData
    });
  }

  // this will hold the matches update state/clear with users keystrokes
  dataSearch(firstSearch, lastSearch) {
    // console.log(dataToSearch);
    
    let firstFiltered = firstSearch.map(data => {
      return data;
    });
     let lastFiltered = lastSearch.map(data => {
       return data;
     });
    console.log(firstFiltered);
    console.log(lastFiltered);

    let personsFilter = lastFiltered.concat(firstFiltered);

    console.log(personsFilter);
    
      // if (this.state.search === '' ) {
      //   this.setState({
      //   displayData: []
      // });
      // } else {
      //   this.setState({
      //   displayData: dataFiltered
      // });
      // }
  }



  // get the value of the user keystroke, hold in state
  // use the keystrokes to filter through the data state
  updateSearch(e) {
    const userInput = e.target.value.substr(0, 30);

    this.setState({
      search: userInput
    }, () => {
      let lastNameSearch = this.state.data.filter(user => {
        return user.lastname
          .toLowerCase()
          .indexOf(this.state.search) !== -1;
      });
      let firstNameSearch = this.state.data.filter(user => {
        return user.firstname
          .toLowerCase()
          .indexOf(this.state.search) !== -1;
      });
      
      this.dataSearch(lastNameSearch, firstNameSearch);
    });
  }

  render() {

    return (
      <div>
        <h1>Search It!</h1>
        <label>Search a name!</label>
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch}
        />
        <div>
          <ul>
            {/* <li>{this.state.displayData}</li> */}
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
