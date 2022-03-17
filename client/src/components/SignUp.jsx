import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const SignUp = () => {
	const navigation = useNavigate()
	const [cookies, setCookie] = useCookies()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [first_name, setFirstName] = useState('')
	const [last_name, setLastName] = useState('')
	const [user_name, setUserName] = useState('')
	const [address, setAddress] = useState('')
	const [phone_no, setPhoneNo] = useState('')

	function createUserCookie() {
		setCookie("user_name", user_name, {path: '/', sameSite: 'lax'})
	}

	async function createNewUser() {
		
		const task = {
			email: email,
			password: password,
			first_name: first_name,
			last_name: last_name,
			user_name: user_name,
			address: address,
			phone_no: phone_no,
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
			//Create new account and then redirect to home page with the new user logged in
			axios
				.post('/users', task)
				.then((res) => {
					if (res.data) {
						createUserCookie()
						navigation('/')
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	useEffect(() => {
		if(cookies.user_name) {
			navigation("/")
		}
	})	
	
	return (
		<main className='form-signup'>
			<form>
				<h1 className='h3 mb-3 fw-normal'>Please Sign Up</h1>

				<div className='form-floating'>
					<input
						type='firstname'
						className='form-control'
						id='firstname'
						value={first_name}
						placeholder='First name'
						onChange={(e) => setFirstName(e.target.value)}
					/>
					<label htmlFor='firstname'>First Name</label>
				</div>
				<div className='form-floating'>
					<input
						type='lastname'
						className='form-control'
						id='lastname'
						value={last_name}
						placeholder='Last name'
						onChange={(e) => setLastName(e.target.value)}
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
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label htmlFor='signup_email'>Email address</label>
				</div>
				<div className='form-floating'>
					<input
						type='username'
						className='form-control'
						id='username'
						value={user_name}
						placeholder='Username'
						onChange={(e) => setUserName(e.target.value)}
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
						onChange={(e) => setPassword(e.target.value)}
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
						onChange={(e) => setAddress(e.target.value)}
					/>
					<label htmlFor='address'>Address</label>
				</div>
				<div className='form-floating'>
					<input
						type='phoneNo'
						className='form-control'
						id='phoneNo'
						value={phone_no}
						placeholder='Phone No.'
						onChange={(e) => setPhoneNo(e.target.value)}
					/>
					<label htmlFor='phoneNo'>Phone No.</label>
				</div>
				<br></br>
				<button
					className='w-100 btn btn-lg btn-primary'
					type='button'
					onClick={createNewUser}
				>
					Create Account
				</button>
			</form>
		</main>
	);
	
}

export default SignUp;
