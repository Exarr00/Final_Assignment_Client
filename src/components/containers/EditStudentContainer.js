import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { fetchStudentThunk, editStudentThunk, fetchAllCampusesThunk } from "../../store/thunks";
import { EditStudentView } from "../views";

class EditStudentContainer extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            gpa: "",
            imageUrl: "",
            campusId: null,
            redirect: false,
            redirectId: null
        };
    }

    componentDidMount() {
        //getting student ID from url
        this.props.fetchStudent(this.props.match.params.id).then(() => {
            this.setState({
                firstname: this.props.student.firstname,
                lastname: this.props.student.lastname,
                email: this.props.student.email,
                gpa: this.props.student.gpa,
                imageUrl: this.props.student.imageUrl,
                campusId: this.props.student.campusId
            })
        })
        this.props.fetchAllCampuses();
    }


    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async event => {
        event.preventDefault();
        let campus = this.state.campusId
        if (this.state.campusId === "none") {
            campus = null;
        }
        console.log(this.state.campusId)
        let student = {
            id: this.props.student.id,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            gpa: this.state.gpa,
            imageUrl: this.state.imageUrl,
            campusId: campus
        };

        await this.props.editStudent(student);

        this.setState({
            firstname: "",
            lastname: "",
            campusId: null,
            redirect: true,
            redirectId: this.props.student.id
        });
    }

    componentWillUnmount() {
        this.setState({ redirect: false, redirectId: null });
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to={`/student/${this.state.redirectId}`} />)
        }
        return (
            <EditStudentView
                student={this.props.student}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                allCampuses={this.props.allCampuses}
            />
        );
    }
}

const mapState = (state) => {
    return {
        student: state.student,
        allCampuses: state.allCampuses
    };
};

const mapDispatch = (dispatch) => {
    return {
        fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
        editStudent: (student) => dispatch(editStudentThunk(student)),
        fetchAllCampuses: () => dispatch(fetchAllCampusesThunk())
    };
};

export default connect(mapState, mapDispatch)(EditStudentContainer);