import { Link } from "react-router-dom";
import Navbar from'./Navbar/Navbar'

const AllStudentsView = (props) => {
  const {students, deleteStudent} = props;

  if (!students.length) {
    return (
    <div>
      <Navbar/> 
      <Link to={`newstudent`}>
        <button className="btn btn-primary btn-block">Add New Student</button>
      </Link>
      <p style={{textAlign:"center"}}>There are no students.</p>
     
    </div>
    );
  }
  
  return (
    <div>
      <Navbar/>
      <Link to={`newstudent`}>
        <button className="btn btn-primary btn-block">Add New Student</button>
      </Link>
      {students.map((student) => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id} className="border border-dark" style={{margin:"auto", width:"50%", marginBottom:"2%"}}> 
          <Link to={`/student/${student.id}`}>
            <h1 style={{textAlign:"center"}}>{name}</h1>
          </Link>
          <img src={student.imageUrl} alt="Broken" style={{width:"100%", height:"300px"}}></img>
          <button className="btn btn-danger btn-block" onClick={() => deleteStudent(student.id)}>Delete</button>
          </div>
        );
      }
      )}
    </div>
  );
};


export default AllStudentsView;