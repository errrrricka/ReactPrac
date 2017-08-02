import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchBar';

const API_Key = 'AIzaSyACCtbLbcZKi3jP_F4stQr0A_lE1UkDn_Q';
// importing react library here. go find the lbrary called react and assign it to the variable react


// Create a new component that produces HTML

// const App = function () {
//   return <div>Herro!</div>;
// }

// Using a fat arrow instead. It helps to have more compact syntaxin React.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take the component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
// Line above doesn't work alone because I'm not importing React library. Nothing in HTML either.
