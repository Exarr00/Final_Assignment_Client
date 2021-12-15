import Navbar from'./Navbar/Navbar'
import { Link } from 'react-router-dom';

const StudentView = (props) => {
  const { student} = props;

  const validCampus = (element) =>{
    if(!element){
      return <h3>Not part of a campus</h3>
    }
    else{
      return (
        <h3><Link to={`/campus/${student.campus.id}`} >{student.campus.name}</Link></h3>
        )
    }
  }
  return (
    <div>
      <Navbar/>
      <div className='border border-dark' style={{margin:"auto", width:"50%", marginTop:"2%"}}>
      <h1>{student.firstname + " " + student.lastname}</h1>
      {validCampus(student.campus)}
      <h3>{student.email}</h3>
      <h3>GPA: {student.gpa}</h3>
      <img src={student.imageUrl} alt="Broken" style={{width:"100%", height:"300px"}}></img>
      <Link className="editLink" to={`/student/${student.id}/edit`}>
       <button className='btn btn-danger btn-block'>Edit</button> 
      </Link>
      </div>
    </div>
  );

};

export default StudentView;