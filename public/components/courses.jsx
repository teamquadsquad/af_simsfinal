import React, {Component} from 'react';
import axios from 'axios';

class Courses extends Component {

    constructor(props) {

        super(props);
        if(localStorage.getItem('token')){

            console.log('token exist');
            
        } else if(localStorage.getItem('type') != "Admin"){

            this.props.history.push('/');
        } else {

            this.props.history.push('/sign_in');         
        }
        this.state = {
            name: '',
            description: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const catobj = {
            Name: this.state.name,
            Description: this.state.description,
        };
        
        var token = localStorage.getItem('token');
        console.log(token);
        
        let headers = {
            headers: {

              'courseweb-access-token': token,
            }
          }
        axios.post('/api/course', catobj, headers).then(
            data => {

                // alert(data.data.message);
                if(data.data.status == 'fail'){

                    alert(data.data.details);
                } else {

                    alert('Successful');
                }
                
                // console.log('Success ' + data.data);
            }
        )
        .catch(err => {

            console.log(err);
        });

        this.setState({
            name: '',
            description: '',
        })


    }
    render() {
        return (
            <div>
                <h1>Create Course</h1>
                <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.name}
                            name="name"
                        />
                        <label>Decription</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.description}
                            name="description"
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="submit" />
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

export default Courses;