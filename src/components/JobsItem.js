import React from 'react'

function JobsItem(item) {
  const jobs = item;
  return (
    <li>
      <span>{jobs.title}</span>
      <span><a href={jobs.url}>{jobs.title}</a></span>
      <span>{jobs.company}</span>
      <span>{jobs.position}</span>
      <span>{jobs.date}</span>
      <span>{jobs.jobOffer}</span>
    </li>
  )
}

export default JobsItem;