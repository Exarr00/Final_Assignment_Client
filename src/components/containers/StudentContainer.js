import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { fetchStudentThunk, deleteStudentThunk } from "../../store/thunks";
import { StudentView } from "../views";

class StudentContainer extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    //getting student ID from url
    this.props.fetchStudent(this.props.match.params.id);
  }

  delete = studentID => {
    this.props.deleteStudent(studentID)
    this.setState({
      redirect: true
    })
  }

  componentWillUnmount() {
    this.setState({ redirect: false });
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to={'/students'} />)
    }
    return (
      <StudentView
        student={this.props.student}
        delete={this.delete}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    deleteStudent: (studentId) => dispatch(deleteStudentThunk(studentId))
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);