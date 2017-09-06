import React, {Component} from 'react';

// const SearchBar = () => {
//   return (
//     <input />
//   );
// }

// refactor from functional to class component.
// class components to record keeping and communicating with other components

// every class has a render. a function. that will return JSX, always.


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'Search here'};
  }

  render () {
    return (
      <div>
        <input
        value={this.state.term}
        onChange={(event) => this.setState({term: event.target.value })} />
      </div>
    );
  }
}
// define fnc on class that runs when event occurs. event handler.
// same gen syntax as render method above
// then pass it to the element we want to watch for the event
// event object describes event that occured, specific & techy.

// value of controlled components only changes when the state is updated

export default SearchBar;
