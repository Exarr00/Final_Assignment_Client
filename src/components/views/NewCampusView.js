import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Navbar from'./Navbar/Navbar'
import {useStyles} from './styles/editnew'

const NewCampusView = (props) => {
    const { handleChange, handleSubmit } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <Navbar/>
            <div className={classes.formContainer}>
                <div className={classes.formTitle}>
                    <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
                        New Student
                    </Typography>
                </div>
                <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>Name: </label>
                    <input type="text" name="name" onChange={(e) => handleChange(e)} style={{width: "96%"}} required/>
                    <br />
                    <br />

                    <label style={{color:'#11153e', fontWeight: 'bold'}}>Address: </label>
                    <input type="text" name="address" onChange={(e) => handleChange(e)} style={{width: "96%"}} required/>
                    <br/>
                    <br/>

                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>Description: </label>
                    <textarea name="description" onChange={(e) => handleChange(e)} style={{width: "96%"}} required/>
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

export default NewCampusView