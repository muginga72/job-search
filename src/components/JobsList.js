import React from 'react'

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

function JobsList({jobsList}) {
  return (
    <div>
      <ul>
        {jobsList.map((item) => (
          <li key={item.jobID} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default JobsList;