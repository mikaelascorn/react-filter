import React from 'react';
import ReactDOM from 'react-dom';
import faker from "faker";
import filterUsers from "../server/index";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      data: [],
      display: []
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.dataMatches = this.dataMatches.bind(this);
    this.dataSearch = this.dataSearch.bind(this);
  }

  componentDidMount() {
    // console.log(filterUsers());
    const allData = filterUsers();
    this.setState({
      data: allData
    });
    let dataToSearch = this.state.data.filter(user => {
      return user.firstname.toLowerCase().indexOf(this.state.search) !== -1;
    });
  }

  // filtering() {
  //   console.log(dataToSearch);
    
  //   let dataToSearch = this.state.data.filter(user => {
  //     return user.firstname.toLowerCase().indexOf(this.state.search) !== -1;
  //   });
  //   this.dataMatches(dataToSearch);
  // }

  dataMatches(userData) {
    console.log(userData);
    let dataToSearch = this.state.data.filter(user => {
      return user.firstname.toLowerCase().indexOf(this.state.search) !== -1;
    });

  }
  // filter as they type
  // render the matches - hold them in sttate
  // on click render on the page, stave to state

  dataSearch(dataToSearch) {
    const dataFiltered = dataToSearch.map((data) => {
      return (data.firstname, data.lastname)
      // const firstName = data.firstname;
      // const lastName =  data.lastname;
      console.log(data.firstname);                      
    })

    this.dataMatches(dataFiltered);
    }

  // get the value of the user keystroke, hold in state
  updateSearch(e) {
    const userInput = e.target.value.substr(0, 30);

    let dataToSearch = this.state.data.filter(user => {
      return user.firstname.toLowerCase().indexOf(this.state.search) !== -1;
    });    
    this.setState({
      search: userInput
    });
    this.dataSearch(dataToSearch);
  }

  render() {
    // let filteredData = this.state.data.filter(
    //   (user) => {
    //     return user.firstname.toLowerCase().indexOf(this.state.search) !== -1;
    //   }
    // );

    return (
      <div>
        <h1>Search It!</h1>
        <label>Search a name!</label>
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch}
        />
        <ul />
        {/* i did the filtering here instead? */}
        {/* <ul>
          {filteredData.map((data, i) => {
            console.log(data);                        
            return <li key={i}>
                {data.firstname} {data.lastname}
              </li>;
          })}
        </ul> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
