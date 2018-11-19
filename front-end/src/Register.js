import React, { Component } from "react";
import axios from "axios";

class AddUser extends Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
            admin:"",
            picture: ""
        };
    }

    onChange = e => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    };

    handleSubmit = event => {
        event.preventDefault();

        const { username, password, email, admin, picture, confirmPassword } = this.state;
        if(password === confirmPassword){
        axios
            .post("http://localhost:4000/login_register/", {
                username,
                password,
                email,
                admin,
                picture
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
                // alert("Reg complete ");
                // window.location.reload();
            });
        }
        else{
            alert("Passwords do not match")
        }
    };

    render() {
        return (
            <div className="content">
                <h2>Register</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={this.onChange}
                        />
                    </label>
                    <br />
                    <label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.onChange}
                        />
                    </label>
                    <br />
                    <label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={this.onChange}
                        />
                    </label>
                    <br />
                    <label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChange={this.onChange}
                        />
                    </label>
                    <br />
                    <label>
                        <input
                            type="text"
                            name="picture"
                            placeholder="Link to Picture"
                            onChange={this.onChange}
                        />
                    </label>
                    <br />
                    <label>
                        I agree to the terms and conditions
                        <input required type="checkbox" name="terms" />
                    </label>
                    <br />
                    <button className="button" type="submit">
                        Register Now
                    </button>
                </form>
            </div>
        );
    }
}

export default AddUser;
