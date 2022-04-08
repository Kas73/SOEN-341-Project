import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Login = () => {
	const navigation = useNavigate()
	const [user_name, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const [cookies, setCookie] = useCookies('user_name')

	function createUserCookie(is_admin) {
		setCookie("user_name", user_name, {path: '/', sameSite: 'lax'})
		setCookie("is_admin", is_admin, {path: '/', sameSite: 'lax'})
	}


	async function signUserIn() {

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
						window.alert(`Logged in as ${task.user_name}`);
						createUserCookie(res.data.is_admin);
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
			<form>
				<h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

				<div className='form-floating'>
					<input
						type='user_name'
						className='form-control'
						id='floatingInput'
						placeholder='Username'
						value={user_name}
						onChange={(e) => setUserName(e.target.value)}
						data-testid='user-name-form-field'
					/>
					<label htmlFor='floatingInput' data-testid='user-name-form-label'>Username</label>
				</div>
				<div className='form-floating'>
					<input
						type='password'
						className='form-control'
						id='floatingPassword'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						data-testid='password-form-field'
					/>
					<label htmlFor='floatingPassword' data-testid='password-form-label'>Password</label>
				</div>

				<div className='checkbox mb-3'>
					<label>
						<input type='checkbox' value='remember-me' /> Remember me
					</label>
				</div>
				<button
					className='w-100 btn btn-lg btn-primary'
					type='button'
					onClick={signUserIn}
					data-testid='sign-in-button'
				>
					Sign in
				</button>
			</form>
		</main>
	);
	
}

export default Login;
