import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Navbar from './Navbar/Navbar'
import { useStyles } from './styles/editnew'

const EditStudentView = (props) => {
  const { student, handleChange, handleSubmit, allCampuses } = props;
  const classes = useStyles();

  const validCampus = (element) => {
    if (!element) {
      return
    }
    else {
      return (
        <option key={element.id} value={element.id}>{element.name}</option>
      )
    }
  }

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
            Edit Student
          </Typography>
        </div>
        <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
          <label style={{ color: '#11153e', fontWeight: 'bold' }}>First Name: </label>
          <input type="text" name="firstname" defaultValue={student.firstname} onChange={(e) => handleChange(e)} style={{ width: "96%" }} />
          <br />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Last Name: </label>
          <input type="text" name="lastname" defaultValue={student.lastname} onChange={(e) => handleChange(e)} style={{ width: "96%" }} />
          <br />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Email: </label>
          <input type="email" name="email" defaultValue={student.email} onChange={(e) => handleChange(e)} style={{ width: "96%" }} />
          <br />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>GPA: </label>
          <input type="number" min="0.0" max="4.0" step=".1" name="gpa" defaultValue={student.gpa} onChange={(e) => handleChange(e)} style={{ width: "96%" }} />
          <br />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Image: </label>
          <input type="text" name="imageUrl" defaultValue={student.imageUrl} onChange={(e) => handleChange(e)} style={{ width: "96%" }} />
          <br />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>campus: </label>
          <select type="text" name="campusId" onChange={(e) => handleChange(e)} defaultValue={student.campusId} style={{ width: "96%" }} required>
            <option key="0" value="none">Not Selected</option>
            {validCampus(student.campus)}
            {
              allCampuses.filter(campus => {
                return (student.campusId !== campus.id)
              }).map(campus => {
                return (
                  <option key={campus.id} value={campus.id}>{campus.name}</option>
                )
              })

            }
          </select>
          <br />
          <br />


          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <br />
          <br />
        </form>
      </div>
    </div>

  )
}

export default EditStudentView