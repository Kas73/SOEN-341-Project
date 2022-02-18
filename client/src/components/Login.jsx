import React, { Component } from 'react';

class Login extends Component {
	state = {
        email: "",
        password: "",
    };

    signUserIn = () => {
        const task = {
            email: this.state.email,
            password: this.state.password
        }

        if(task.email && task.password) {
			//TODO implement request for email login
			console.log(`Email: ${task.email}, password: ${task.password}`)
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

    render() {
        let { email, password } = this.state;
        return (
            <main className='form-signin'>
			<form>
				<h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

				<div className='form-floating'>
					<input
						type='email'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={email}
						onChange={this.updateEmail}
					/>
					<label htmlFor='floatingInput'>Email address</label>
				</div>
				<div className='form-floating'>
					<input
						type='password'
						className='form-control'
						id='floatingPassword'
						placeholder='Password'
						value={password}
						onChange={this.updatePassword}
					/>
					<label htmlFor='floatingPassword'>Password</label>
				</div>

				<div className='checkbox mb-3'>
					<label>
						<input type='checkbox' value='remember-me' /> Remember me
					</label>
				</div>
				<button
					className='w-100 btn btn-lg btn-primary'
					type='button'
					onClick={this.signUserIn}
				>
					Sign in
				</button>
			</form>
		</main>
        )
    }
}

export default Login;
