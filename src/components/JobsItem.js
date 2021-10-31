import React from 'react'

function JobsItem({item}) {
  return (
    <li>
      <span>
        <a href={item.url}>{ item.title }</a>
      </span>
      <span> { item.company } </span>
      <span> <strong>{ item.position } </strong></span>
      <span> { item.date } </span>
      <span> { item.jobOffer } </span>
    </li>
  )
}

export default JobsItem;
