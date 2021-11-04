import React from 'react'

function JobsItem({jobs}) {

  return (
    <li key={jobs.jobID}>
      <span>  {jobs.jobID}</span>
      <span><a href={jobs.url}>  {jobs.title}</a></span>
      <span>  {jobs.company}</span>
      <span>  {jobs.position}</span>
      <span>  {jobs.date}</span>
      <span>  <strong>{jobs.jobOffer}</strong></span>
    </li>
  )
}

export default JobsItem;