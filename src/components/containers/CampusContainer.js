import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { fetchCampusThunk, editStudentThunk, fetchAllStudentsThunk, deleteCampusThunk } from "../../store/thunks";

import { CampusView } from "../views";

class CampusContainer extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      redirect: false,
    };
  }
  componentDidMount() {
    //getting campus ID from url
    this.props.fetchCampus(this.props.match.params.id);
    this.props.fetchAllStudents();
  }

  deleteCamp = campusID => {
    this.props.deleteCampus(campusID)
    this.setState({
      redirect: true
    })
  }

  deleteStudent = async student => {
    let addedData = {
      id: student.id,
      firstName: student.firstname,
      lastName: student.lastname,
      Email: student.email,
      image: student.imageUrl,
      gpa: student.gpa,
      campusId: null,
    }
    await this.props.editStudent(addedData)
    await this.props.fetchCampus(this.props.match.params.id);
    await this.props.fetchAllStudents();
  }

  addStudent = async event => {
    let student = {
      id: event.id,
      firstname: event.firstname,
      lastname: event.lastname,
      email: event.email,
      campusId: this.props.campus.id,
      gpa: event.gpa
    };
    await this.props.editStudent(student)
    await this.props.fetchCampus(this.props.match.params.id);
    await this.props.fetchAllStudents();
  }

  componentWillUnmount() {
    this.setState({ redirect: false });
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to={'/campuses'} />)
    }
    return (
      <CampusView
        campus={this.props.campus}
        deleteStudent={this.deleteStudent}
        allStudents={this.props.allStudents}
        addStudent={this.addStudent}
        deleteCamp={this.deleteCamp}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
    student: state.student,
    allStudents: state.allStudents
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editStudent: student => dispatch(editStudentThunk(student)),
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    deleteCampus: (id) => dispatch(deleteCampusThunk(id))
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);