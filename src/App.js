import React, { Component } from 'react';
import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar
          placeholder="zoeken"
        />
      </div>
    );
  }
}

export default App;
