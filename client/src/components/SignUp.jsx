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
    
    return(
    <main class="form-signup">
        <form>
            <h1 class="h3 mb-3 fw-normal">Please Sign Up</h1>
            
            <div class="form-floating">
            <input 
                type="firstname" 
                class="form-control" 
                id="floatingInput" 
                placeholder="First name"
            />
            <label for="floatingInput">First Name</label>
            </div>
            <div class="form-floating">
            <input 
                type="lastname" 
                class="form-control" 
                id="floatingInput" 
                placeholder="Last name"
            />
            <label for="floatingInput">Last Name</label>
            </div>
            <div class="form-floating">
            <input 
                type="signup_email" 
                class="form-control" 
                id="floatingInput" 
                placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
            <input 
            type="signup_password" 
            class="form-control" 
            id="floatingPassword" 
            placeholder="Password"/>
            <label for="floatingPassword">Password</label>
            </div>
            <button
					className='w-100 btn btn-lg btn-primary'
					type='submit'
					onClick={handleSubmit2}
				>
					Create Account
			</button>
        </form>
    </main>
    );
};

export default SignUp;