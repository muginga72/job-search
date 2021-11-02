import { useState } from 'react';
import JobsList from './JobsList';
import JobsSearch from './components/JobsSearch';

const App = () => {
  const [newJobsSearch, setNewJobsSaerch] = useState('');
  
  return(
    <div>
      <h1 style={{color: "blue"}}>Job Search</h1>
      <JobsSearch onStartSearch={setNewJobsSaerch} newJobsSearch={ newJobsSearch }/>
      <JobsList />
   </div>
  );
}

export default App;