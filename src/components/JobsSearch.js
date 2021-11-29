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
        <label htmlFor="jobSearch">Search: </label>
        <input
          type="text"
          jobID="jobSearch"
          name="title" required
          placeholder="searching"
          value={jobsSearch}
          onChange={e => setJobsSearch(e.target.value)}
        />
        <hr />
      </div>
    </form>
    
  );
}

export default JobsSearch;