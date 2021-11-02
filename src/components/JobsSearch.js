import React, {useState} from 'react'

function JobsSearch(props) {
  const [jobsSearch, setJobsSearch] = useState('');

  const handleStartSearch = (e) => {
    console.log(e);
    e.preventDefault();
    props.onStartSearch(jobsSearch);
    setJobsSearch('');
  }
  return (
    <form onSubmit={handleStartSearch}>
      <div>
        <label htmlFor="search">Search: </label>
        <input
          jobID="jobSearch"
          name="title"
          type="text"
          placeholder="Searching"
          value={jobsSearch}
          onChange={e => setJobsSearch(e.target.value)}
        />
        <hr />
      </div>
    </form>
    
  );
}

export default JobsSearch;

