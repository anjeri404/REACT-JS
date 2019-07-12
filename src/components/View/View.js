import React, {Component} from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class View extends Component {
    state = {
        post: []
    }

    componentDidMount = () => {
        axios.get ('https://jsonplaceholder.typicode.com/users/'+ this.props.match.params.id)
        .then(response => {
            this.setState({post: response.data})
        })
        .catch (error => {
            this.props.history.push ('/')
        })
    }


    render () {
        return (
            <div>
            <p><strong> ID: {this.state.post.id} </strong> </p> 
            <p> <strong> Name: {this.state.post.name} </strong> </p>
            <p>Email:{this.state.post.email} </p>
            <p>Phone: {this.state.post.phone} </p>
                <Link to="/"> <button> Back </button></Link>
        </div>
        );
                
    }  
}
export default View;