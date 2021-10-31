import React from 'react';
import JobsSearch from './components/JobsSearch';

const App = () => {
  return(
    <div className="app">
      <h1>Job Search</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      
      <hr />
      
      <JobsSearch />
      
   </div>
  );
}

export default App;
