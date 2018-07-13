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
      postData: ""
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.dataSearch = this.dataSearch.bind(this);
    this.dataSearch = this.dataSearch.bind(this);
    this.post = this.post.bind(this);
    // this.highlight = this.highlight.bind(this);
  }

  componentDidMount() {
    const allData = filterUsers();
    this.setState({
      data: allData
    });
  }

  //this will register if the user selected a name and display from the search
  post(e) {
    e.preventDefault();
    e.stopPropagation();

    const buttonArray = [];
    const name = e.target;
    buttonArray.push(name);
    const filtering = buttonArray[0].textContent;
    // console.log(filtering);
    this.setState({
      postData: filtering
    });
  }

  // highlight(wordToMatch) {
  //   console.log(wordToMatch);
  //   // const words = {
  //   //   firstP: wordToMatch.firstname,
  //   //   lastP: wordToMatch.lastname;,
  //   // }
  //   const firstP = wordToMatch.firstname;
  //   const lastP = wordToMatch.lastname;
  //         // const regex = new RegExp(wordToMatch, "gi");

  //   return wordToMatch.firstname.filter(name => {
  //   //   // here we need to figure out if the city or state matches what was searched
  //     const regex = new RegExp(firstP, "gi");
  //     return wordToMatch.firstname.match(regex));
  //   });
  // }

  // this will hold the matches update state/clear users keystrokes, combining first and last names
  dataSearch(firstSearch, lastSearch) {
    // console.log(dataToSearch);
    let firstFiltered = firstSearch.map(data => {
      return data;
    });
    let lastFiltered = lastSearch.map(data => {
      return data;
    });

    let personsFilter = lastFiltered.concat(firstFiltered);
  
    if (this.state.search === "") {
      this.setState({
        displayData: []
      });
    } else {
      this.setState({
        displayData: personsFilter
      });
    }
    this.highlight(personsFilter);

  }

  // get the value of the user keystroke, hold in state
  // use the keystrokes to filter through the data state
  updateSearch(e) {
    const userInput = e.target.value.substr(0, 30);

    this.setState(
      {
        search: userInput
      },
      () => {
        let lastNameSearch = this.state.data.filter(user => {
          return user.lastname.toLowerCase().indexOf(this.state.search) !== -1;
        });
        let firstNameSearch = this.state.data.filter(user => {
          return user.firstname.toLowerCase().indexOf(this.state.search) !== -1;
        });
        this.dataSearch(lastNameSearch, firstNameSearch);
      }
    );
  }

  render() {
    // const cityName = place.city.replace(regex, );

    let matches = this.state.displayData;
    return (
      <div className="renderWrapper">
        <h1>Search It!</h1>
        <div className="search">
          <label>Search a name!</label>
          {this.state.postData === "" ? (
            <input
              ref="searchInput"
              id="input"
              type="text"
              placeholder="Start searching"
              value={this.state.search}
              onChange={this.updateSearch}
            />
          ) : (
            <input
              id="input"
              type="text"
              placeholder="Start searching"
              value={this.state.postData}
              onChange={this.updateSearch}
            />
          )}
        </div>
        <div className="results">
          <ul>
            {matches.map((people, i) => (
              <li key={i} onClick={this.post}>
                <button>
                  {people.firstname} {people.lastname}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
