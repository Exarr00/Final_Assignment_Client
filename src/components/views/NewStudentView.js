import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Navbar from './Navbar/Navbar'
import { useStyles } from './styles/editnew'

const NewStudentView = (props) => {
  const { handleChange, handleSubmit, allCampuses } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
            New Student
          </Typography>
        </div>
        <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
          <label style={{ color: '#11153e', fontWeight: 'bold' }}>First Name: </label>
          <input type="text" name="firstname" onChange={(e) => handleChange(e)} style={{ width: "96%" }} required />
          <br />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Last Name: </label>
          <input type="text" name="lastname" onChange={(e) => handleChange(e)} style={{ width: "96%" }} required />
          <br />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Email: </label>
          <input type="email" name="email" onChange={(e) => handleChange(e)} style={{ width: "96%" }} required />
          <br />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>GPA: </label>
          <input type="number" min="0.0" max="4.0" step=".1" name="gpa" onChange={(e) => handleChange(e)} style={{ width: "96%" }} required />
          <br />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>campusId: </label>
          <select type="text" name="campusId" onChange={(e) => handleChange(e)} style={{ width: "96%" }} required>
            <option key="0" value="none">Not Selected</option>
            {
              allCampuses.map(campus => {
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

export default NewStudentView;