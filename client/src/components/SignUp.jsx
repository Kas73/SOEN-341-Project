import React, { Component } from 'react';

class SignUp extends Component {
	state = {
        email: "",
        password: "",
        firstname: "",
        lastname: "",
    };

    createNewUser = () => {
        const task = {
            email: this.state.email,
            password: this.state.password,
            firstname: this.state.firstname,
            lastname: this.state.lastname
        }

        if(task.email && task.password && task.firstname && task.lastname) {
			//TODO implement request for creating new account
			console.log(`New account: Email: ${task.email}, password: ${task.password}, firstname: ${task.firstname}, lastname: ${task.lastname}`)
		}
    }

    updateEmail = (e) => {
        this.setState({
            email: e.target.value,
        });
    }

    updatePassword = (e) => {
        this.setState({
            password: e.target.value,
        });
    }

    updateFirstName = (e) => {
        this.setState({
            firstname: e.target.value,
        })
    }

    updateLastName = (e) => {
        this.setState({
            lastname: e.target.value,
        })
    }

    render() {
        let { email, password, firstname, lastname } = this.state;
        return (
            <main className="form-signup">
            <form>
                <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>
                
                <div className="form-floating">
                <input 
                    type="firstname" 
                    className="form-control" 
                    id="firstname"
                    value={firstname}
                    placeholder="First name"
                    onChange={this.updateFirstName}
                />
                <label htmlFor="firstname">First Name</label>
                </div>
                <div className="form-floating">
                <input 
                    type="lastname" 
                    className="form-control" 
                    id="lastname" 
                    value={lastname}
                    placeholder="Last name"
                    onChange={this.updateLastName}
                />
                <label htmlFor="lastname">Last Name</label>
                </div>
                <div className="form-floating">
                <input 
                    type="signup_email" 
                    className="form-control" 
                    id="signup_email" 
                    value={email}
                    placeholder="name@example.com"
                    onChange={this.updateEmail}
                />
                <label htmlFor="signup_email">Email address</label>
                </div>
                <div className="form-floating">
                <input 
                type="signup_password" 
                className="form-control" 
                id="signup_password" 
                placeholder="Password"
                value={password}
                onChange={this.updatePassword}/>
                <label htmlFor="signup_password">Password</label>
                </div>
                <button
                        className='w-100 btn btn-lg btn-primary'
                        type='button'
                        onClick={this.createNewUser}
                    >
                        Create Account
                </button>
            </form>
            </main>
        )
    }
}

export default SignUp;