import React,{useEffect,useState} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import './State.css';

const State = () => {
  
  const [data,setData] = useState([]);

  const getcovid = async () =>{
    const res =  await fetch('https://api.covid19india.org/data.json');
    const sdata =  await res.json();
    console.log(sdata.statewise);
    setData(sdata.statewise);
  }
  useEffect(() => {
        getcovid();
    }, [])




    return (
        <>
            <div className="container">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <h3><strong>INDIA </strong>Covid-19 Dashboard</h3> 
    {/* <img style={{borderRadius="100px" width="70px" }}src="unknen.jpg"/>  */}
    <h3  className="navbar-brand">Unknown_Coder</h3>   
    <h6>made by Hiren Solanki</h6>                                                             
  <div className="table-responsive">          
 <table className="table">
    <thead className="hiren">
      <tr>
        <th>State_Name</th>
        <th>CONFIMED</th>
        <th>RECOVERED</th>
        <th>DEATHS</th>
        <th>ACTIVE</th>
        <th>LAST_UPDATETIME</th>
      </tr>
    </thead>
    <tbody className="don">
    {
      data.map((curElem,ind)=>
      {
        return(
          <tr key={ind}>
          <td>{curElem.state}</td>
          <td>{curElem.confirmed}</td>
          <td>{curElem.recovered}</td>
          <td>{curElem.deaths}</td>
          <td>{curElem.active}</td>
          <td>{curElem.lastupdatedtime}</td>
          
        </tr>
        )
      })
    }
    </tbody>
  </table> 

  </div>
</div>
        </>
    )
}

export default State
