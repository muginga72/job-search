import React from 'react'
import JobsItem from './components/JobsItem';

const jobsList = [ 
  {
    jobID: 9901,
    title: "Developer",
    url: "https://hiring.amazon.com/",
    company: "Amazon",
    position: "Junior-Dev",
    date:"10/23/2021",
    jobOffer: "No",
  },
  
  {
    jobID: 1902,
    title: "Software Eng.",
    url: "https://careers.google.com/jobs/",
    company: "Google",
    position: "Softwares Eng.",
    date:"9/23/2021",
    jobOffer: "No",
  }
]

function JobsList({jobs}) {
  return (
    <div>
      <ul>
        {jobsList.map((item) => (
          <JobsItem key={item.jobID} item={jobs} />
        ))}
      </ul>
    </div>
  );
}

export default JobsList;