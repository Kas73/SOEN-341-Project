import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
	state = {
		email: '',
		password: '',
		firstname: '',
		lastname: '',
		username: '',
		address: '',
		phoneNo: '',
	};

	createNewUser = () => {
		const task = {
			email: this.state.email,
			password: this.state.password,
			first_name: this.state.firstname,
			last_name: this.state.lastname,
			user_name: this.state.username,
			address: this.state.address,
			phone_no: this.state.phoneNo,
		};

		if (
			task.email &&
			task.password &&
			task.first_name &&
			task.last_name &&
			task.user_name &&
			task.address &&
			task.phone_no
		) {
			//TODO implement request for creating new account
			console.log(
				`New account: Email: ${task.email}, password: ${task.password}, firstname: ${task.firstname}, lastname: ${task.lastname}`
			);
			axios
				.post('/users', task)
				.then((res) => {
					if (res.data) {
						this.setState({
							email: '',
							password: '',
							firstname: '',
							lastname: '',
							username: '',
							address: '',
							phoneNo: '',
						});
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	updateEmail = (e) => {
		this.setState({
			email: e.target.value,
		});
	};

	updatePassword = (e) => {
		this.setState({
			password: e.target.value,
		});
	};

	updateFirstName = (e) => {
		this.setState({
			firstname: e.target.value,
		});
	};

	updateLastName = (e) => {
		this.setState({
			lastname: e.target.value,
		});
	};

	updateUsername = (e) => {
		this.setState({
			username: e.target.value,
		});
	};

	updateAddress = (e) => {
		this.setState({
			address: e.target.value,
		});
	};

	updatePhoneNo = (e) => {
		this.setState({
			phoneNo: e.target.value,
		});
	};

	render() {
		let { email, password, firstname, lastname, username, address, phoneNo } =
			this.state;
		return (
			<main className='form-signup'>
				<form>
					<h1 className='h3 mb-3 fw-normal'>Please Sign Up</h1>

					<div className='form-floating'>
						<input
							type='firstname'
							className='form-control'
							id='firstname'
							value={firstname}
							placeholder='First name'
							onChange={this.updateFirstName}
						/>
						<label htmlFor='firstname'>First Name</label>
					</div>
					<div className='form-floating'>
						<input
							type='lastname'
							className='form-control'
							id='lastname'
							value={lastname}
							placeholder='Last name'
							onChange={this.updateLastName}
						/>
						<label htmlFor='lastname'>Last Name</label>
					</div>
					<div className='form-floating'>
						<input
							type='signup_email'
							className='form-control'
							id='signup_email'
							value={email}
							placeholder='name@example.com'
							onChange={this.updateEmail}
						/>
						<label htmlFor='signup_email'>Email address</label>
					</div>
					<div className='form-floating'>
						<input
							type='username'
							className='form-control'
							id='username'
							value={username}
							placeholder='Username'
							onChange={this.updateUsername}
						/>
						<label htmlFor='username'>Username</label>
					</div>
					<div className='form-floating'>
						<input
							type='signup_password'
							className='form-control'
							id='signup_password'
							placeholder='Password'
							value={password}
							onChange={this.updatePassword}
						/>
						<label htmlFor='signup_password'>Password</label>
					</div>
					<div className='form-floating'>
						<input
							type='address'
							className='form-control'
							id='address'
							value={address}
							placeholder='Address'
							onChange={this.updateAddress}
						/>
						<label htmlFor='address'>Address</label>
					</div>
					<div className='form-floating'>
						<input
							type='phoneNo'
							className='form-control'
							id='phoneNo'
							value={phoneNo}
							placeholder='Phone No.'
							onChange={this.updatePhoneNo}
						/>
						<label htmlFor='phoneNo'>Phone No.</label>
					</div>
					<br></br>
					<button
						className='w-100 btn btn-lg btn-primary'
						type='button'
						onClick={this.createNewUser}
					>
						Create Account
					</button>
				</form>
			</main>
		);
	}
}

export default SignUp;
