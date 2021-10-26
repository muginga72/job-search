const jobs = [ 
  {
    jobID: 9901,
    title: "Developer",
    url: "https://hiring.amazon.com/",
    company: "Amazon",
    position: "Junior-Dev",
    date:"10/23/2021",
    jobOffer: "No"
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
  
const App = () => {
  return(
    <div>
      <h1>My Search for Job</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      
      <hr />
      
      <ul>
        {jobs.map(function (item) {
          return (
            <li key={ item.jobID }>
              <span>
                <a href={item.url}>{ item.title }                 </a>
              </span>
              <span> { item.company } </span>
              <span> <strong>{ item.position } </strong></span>
              <span> { item.date } </span>
              <span> { item.jobOffer } </span>
            </li>
          );
        })}
        
      </ul>
      
   </div>
  );
}

export default App;
