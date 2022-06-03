import "./App.css";
import React, { Component } from "react";
import { CardList } from "./component/card-list/card-list-componenet";
import { SarchBox } from "./component/search bar/search";

// function App() {
//   return (

//   );
// }

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((newPromeses) => this.setState({ monster: newPromeses }));
  };

  OnChangeFn = (data) => {
    this.setState({ searchField: data.target.value });
  };

  render() {
    const { monster, searchField } = this.state;
    const filterMonster = monster.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
      <h1 className="h1">Monster-Robodox</h1>
        <SarchBox placeholder="search monster" onchange={this.OnChangeFn   } />
        {/* এখানে আমি onchange এ this.OnChangeFn এর পরিবর্তে এটা লিখতে পারি  --  this.setState({ searchField: data.target.value }) */}
        <CardList monster={filterMonster} />
      </div>
    );
  }
}

export default App;
