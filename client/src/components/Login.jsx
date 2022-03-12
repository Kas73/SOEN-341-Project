import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
	state = {
		user_name: '',
		password: '',
	};

	signUserIn = () => {
		const task = {
			user_name: this.state.user_name,
			password: this.state.password,
		};

		if (task.user_name && task.password) {
			//TODO implement request for user_name login
			console.log(`Email: ${task.user_name}, password: ${task.password}`);
		}

		axios
			.get(`/users/${task.user_name}`)
			.then((res) => {
				if (res.data) {
					//console.log(res.data.password);
					if (task.password == res.data.password) {
						console.log(`Logged in as ${task.user_name}`);
						this.setState({ user_name: '', password: '' });
					}
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	updateUsername = (e) => {
		this.setState({
			user_name: e.target.value,
		});
	};

	updatePassword = (e) => {
		this.setState({
			password: e.target.value,
		});
	};

	render() {
		let { user_name, password } = this.state;
		return (
			<main className='form-signin'>
				<form>
					<h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

					<div className='form-floating'>
						<input
							type='user_name'
							className='form-control'
							id='floatingInput'
							placeholder='Username'
							value={user_name}
							onChange={this.updateUsername}
						/>
						<label htmlFor='floatingInput'>Username</label>
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
		);
	}
}

export default Login;
