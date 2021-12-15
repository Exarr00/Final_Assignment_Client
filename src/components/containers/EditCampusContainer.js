import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { fetchCampusThunk, editCampusThunk } from "../../store/thunks";
import { EditCampusView } from "../views";

class EditCampusContainer extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            name: "",
            address: "",
            description: "",
            imageUrl: "",
            redirect: false,
            redirectId: null
        };
    }

    componentDidMount() {
        this.props.fetchCampus(this.props.match.params.id).then(() => {
            this.setState({
                name: this.props.campus.name,
                address: this.props.campus.address,
                description: this.props.campus.description,
                imageUrl: this.props.campus.imageURl,
            })
        })
    }


    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async event => {
        event.preventDefault();
        console.log(this.props.Campus)
        let campus = {
            id: this.props.campus.id,
            name: this.state.name,
            address: this.state.address,
            description: this.state.description
        };

        await this.props.editCampus(campus);

        this.setState({
            redirect: true,
            redirectId: this.props.campus.id
        });
    }

    componentWillUnmount() {
        this.setState({ redirect: false, redirectId: null });
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to={`/Campus/${this.state.redirectId}`} />)
        }
        return (
            <EditCampusView
                campus={this.props.campus}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

const mapState = (state) => {
    return {
        campus: state.campus,
    };
};

const mapDispatch = (dispatch) => {
    return {
        fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
        editCampus: (campus) => dispatch(editCampusThunk(campus))
    };
};

export default connect(mapState, mapDispatch)(EditCampusContainer);