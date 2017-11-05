import React, { Component } from 'react';

import Filter from './Filter';

import FilteredFruitList from './FilteredFruitList';

import FruitBasket from './FruitBasket';

class App extends Component{
  constructor(props){
    super(props);

      this.state = {
        filters: [],
        currentFilter: null,
        fruit: [],
      };
  }
  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruit = () => {
      fetch('/api/fruit')
        .then(response => response.json())
        .then(items => this.setState({ fruit }));
    }

  render() {
    return (
      <select onChange={this.props.handleChange} defaultValue='all'>
        <option value='all'>All</option>
        {this.state.filters.map(filter =>
          <option key={filter} value={filter}>{filter}</option>
        )}
      </select>
    );
  }

}

export default App;
