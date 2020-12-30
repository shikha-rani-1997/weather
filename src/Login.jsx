import React, { Component } from 'react';
import ReactDom,{NavLink} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Button }from '@material-ui/core';
import './App.css';
 
export default class Login extends Component
{
    userData;
    constructor(props)
    { 
        super(props);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);

        this.state = {
            email: "",
            password: ""
        }
    }
    onChangeemail(e) {
        this.setState({ email: e.target.value });
    
       }
    onChangepassword(e) {
        this.setState({ password: e.target.value });
    }
     
    handlesubmit(e) {
        e.preventDefault();
        this.setState={
            email: '',
            password:''
        }
    }

    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                phone: this.userData.phone
            })
        } else {
            this.setState({
                name: '',
                email: '',
                phone: ''
            })
        }
        
    }
    componentDidUpdate(nextProps, nextState)
    {
        localStorage.setItem('user',JSON.stringify(nextState));
    }
        

    render() {
        return (
            <div className="login">
                <Form onSubmit={this.handlesubmit}>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <br />
                        <Form.Control autoFocus type="email" value={this.state.email} onChange={this.onChangeemail}
                        />
                    </Form.Group>
               
                    <Form.Group controlId="password"> <br />

                        <Form.Label>Password</Form.Label>
                        <br />
                        <Form.Control type="password" value={this.state.password} onChange={this.onChangepassword} />
                    </Form.Group>
                    <Form.Group>
                        <br />
                        <Button block type='submit' >LOGIN</Button>
                    </Form.Group>
                    
                    <Form.Group>
                        <br />
                        <NavLink to='/second'><Button block type='submit' >SEE THE WEATHER</Button></NavLink>
                    </Form.Group>
                </Form>

            </div>

        );

    };
}