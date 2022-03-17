import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Login = () => {
	const navigation = useNavigate()
	const [user_name, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const [cookies, setCookie] = useCookies('user_name')

	function createUserCookie() {
		setCookie("user_name", user_name, {path: '/', sameSite: 'lax'})
	}

	async function signUserIn(e) {
		e.preventDefault();

		const task = {
			user_name: user_name,
			password: password,
		};

		if (task.user_name && task.password) {
			axios
			.get(`/users/${task.user_name}`)
			.then((res) => {
				if (res.data) {
					//console.log(res.data.password);
					if (task.password == res.data.password) {
						console.log(`Logged in as ${task.user_name}`);
						createUserCookie();
						navigation('/')
					}
				}
			})
			.catch((err) => {
				console.log(err);
			});
		}

		
	};

	useEffect(() => {
		if(cookies.user_name) {
			console.log("The cookie user_name exists: " + cookies.user_name)
			navigation('/')
		}
	})

	return (
		<main className='form-signin'>
			<form onSubmit={signUserIn}>
				<h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

				<div className='form-floating'>
					<input
						type='user_name'
						className='form-control'
						id='floatingInput'
						placeholder='Username'
						value={user_name}
						onChange={(e) => setUserName(e.target.value)}
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
						onChange={(e) => setPassword(e.target.value)}
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
					type='submit'
				>
					Sign in
				</button>
			</form>
		</main>
	);
	
}

export default Login;
