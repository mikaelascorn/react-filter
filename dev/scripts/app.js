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
      postData: []
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.dataSearch = this.dataSearch.bind(this);
    this.dataSearch = this.dataSearch.bind(this);
    this.post = this.post.bind(this);
  }

  componentDidMount() {
    const allData = filterUsers();
    this.setState({
      data: allData
    });
  }

  //this will register if the user selected the name and display 
  post(e) {
    e.preventDefault();
    e.stopPropagation();
    // console.log();
    console.log(e.target);

    console.log(e.target.txt);

    const holdingArray = []
    const name = e.target;
    for (let key in name) {
      holdingArray.push(name)
    }
    console.log(holdingArray);
    let index = Object.keys(holdingArray).indexOf(name);
    console.log(index);
    

  }



  // this will hold the matches update state/clear with users keystrokes, combining first and last names
  dataSearch(firstSearch, lastSearch) {
    // console.log(dataToSearch);
    let firstFiltered = firstSearch.map(data => {
      return data;
    });
     let lastFiltered = lastSearch.map(data => {
       return data;
     });

    let personsFilter = lastFiltered.concat(firstFiltered);
    // console.log(personsFilter);
    
    if (this.state.search === '' ) {
      this.setState({
      displayData: []
    });
    } else {
      this.setState({
      displayData: personsFilter
    });
    }
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


  //  <ul>
  //           {matches.map((people, i) => <li key={i}>
  //             <button onClick={this.post}>{people.firstname} {people.lastname}</button>
  //           </li>)}
  //         </ul>

  render() {
    let matches = this.state.displayData;
    return <div className="renderWrapper">
        <h1>Search It!</h1>
        <div className="search">
          <label>Search a name!</label>
          <input type="text" placeholder="Type a name" value={this.state.search} onChange={this.updateSearch} />
        </div>
        <div className="results">
          <ul>
            {matches.map((people, i) => <li key={i} onClick={this.post}>
                <button>
                  {people.firstname} {people.lastname}
                </button>
              </li>)}
          </ul>
        </div>
      </div>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
