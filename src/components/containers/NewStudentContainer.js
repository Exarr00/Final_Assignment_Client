import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewStudentView from '../views/NewStudentView';
import { addStudentThunk,fetchAllCampusesThunk } from '../../store/thunks';


class NewStudentContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname: "", 
          lastname: "", 
          email: "",
          gpa:"",
          imageUrl:"",
          campusId: null, 
          redirect: false, 
          redirectId: null
        };
    }

    componentDidMount() {
      this.props.fetchAllCampuses();
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();
        let campus = this.state.campusId
        if(this.state.campusId === "none"){
          campus = null;
        }
        let student = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            gpa: this.state.gpa,
            campusId: campus
        };
        
        let newStudent = await this.props.addStudent(student);

        this.setState({
          firstname: "", 
          lastname: "", 
          campusId: null, 
          redirect: true, 
          redirectId: newStudent.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
          return (<Redirect to={`/student/${this.state.redirectId}`}/>)
        }
        return (
          <NewStudentView 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}
            allCampuses = {this.props.allCampuses}      
          />
        );
    }
}

const mapState = (state) =>{
  return{
    allCampuses: state.allCampuses
  }
}
const mapDispatch = (dispatch) => {
    return({
        addStudent: (student) => dispatch(addStudentThunk(student)),
        fetchAllCampuses: () => dispatch(fetchAllCampusesThunk())
    })
}

export default connect(mapState, mapDispatch)(NewStudentContainer);