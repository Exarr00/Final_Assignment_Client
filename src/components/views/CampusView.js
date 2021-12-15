import { Link } from 'react-router-dom';
import Navbar from'./Navbar/Navbar'

const CampusView = (props) => {
  const {campus} = props;
  return (
    <div>  
      <Navbar/> 
      <div className="border border-dark" style={{margin:"auto", width:"50%", marginBottom:"2%", marginTop:"2%"}}> 
      <h1>{campus.name}</h1>
      <img src={campus.imageUrl} alt="Broken" style={{width:"100%", height:"200px"}}></img>
      <p>{campus.description}</p>
      <h3>Current Students:</h3>
      <ul>
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
         
            <li key={student.id}> 
              <Link to={`/student/${student.id}`}>{name} </Link>
              <button className="btn btn-danger" onClick= {() => props.deleteCamp(student)}>Drop </button>
            </li>
         
        );
      })}
      </ul>
      <Link className="editLink" to={`/campus/${campus.id}/edit`}>
        <button className='btn btn-dark btn-block'>Edit Campus</button>
        </Link>
      </div>  
      <div className="border border-dark" style={{margin:"auto", width:"50%", marginBottom:"2%"}}>
      <h3> Schoolless Students</h3>
      <ul>
        {props.allStudents.filter(student =>{
          return (!(student.campusId))
        }).map(student => {
          let name = student.firstname + " " + student.lastname;
          return(<li key={student.id}> 
              <Link to={`/student/${student.id}`}>{name} </Link>
              <button className="btn btn-danger" onClick= {() => props.addStudent(student)}>Add</button>
            </li>
          )
        })} 
      </ul>
    </div>
    </div>
  );

};

export default CampusView;