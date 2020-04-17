import React from 'react';
import axios from 'axios';

export default class UserDelete extends React.Component{
    state = {
        id: 0,
    };

    handleChange = event => {
        this.setState({ id:event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.delete(`https://localhost:44342/api/Users/${this.state.id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Person id:
                    <input type ="text" name="id" onChange={this.handleChange}/>
                </label>
                <button type="submit">Delete</button>
            </form>
        );
    }
}