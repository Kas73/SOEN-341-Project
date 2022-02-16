import React, { useState } from 'react';

const Login = ({ setLoginInfo }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		if (email === '' || password === '') {
			if (email === '') alert('Invalid email!');
			else if (password === '') alert('Invalid password');
		} else {
			setLoginInfo({
				email: email,
				password: password,
			});
		}
		setEmail('');
		setPassword('');
	};

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
						onChange={(event) => {
							setEmail(event.target.value);
						}}
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
						onChange={(event) => {
							setPassword(event.target.value);
						}}
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
					onClick={handleSubmit}
				>
					Sign in
				</button>
			</form>
		</main>
	);
};

export default Login;
