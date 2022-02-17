import React, { useState } from 'react';

const SignUp = ({ setSignUp }) => {
    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');

	const handleSubmit2 = (event) => {
		event.preventDefault();

		if (email === '' || password === '' || firstname ==='' || lastname ==='') {
			if (email === '') alert('Invalid email!');
			else if (password === '') alert('Invalid password');
                else if (firstname === '') alert('Invalid firstname');
                    else if (lastname === '') alert('Invalid lastname');
		} else {
			setSignUp({
				email: email,
				password: password,
                firstname: firstname,
                lastname: lastname,
			});
		}
		setEmail('');
		setPassword('');
        setFirstName('');
        setLastName('');
	};
    
    
    return (
        <form>
            <h3>Sign Up</h3>
            <div className="form-group">
                <label>First name</label>
                <input type="text" 
                className="form-control" 
                placeholder="First name" />
            </div>
            <div className="form-group">
                <label>Last name</label>
                <input type="text" 
                className="form-control" 
                placeholder="Last name" />
            </div>
            <div className="form-group">
                <label>Email address</label>
                <input 
                type="signup_email" 
                className="form-control" 
                placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="signup_password" 
                className="form-control" 
                placeholder="Enter password" />
            </div>
            <button
					className='w-100 btn btn-lg btn-primary'
					type='submit'
					onClick={handleSubmit2}
				>
					Create Account
				</button>
        </form>
    );
}

export default SignUp;