import React from 'react';

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<a className='navbar-brand' href='/'>
				Ecommerce Store
			</a>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarSupportedContent'
				aria-controls='navbarSupportedContent'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon'></span>
			</button>

			<div className='collapse navbar-collapse' id='navbarSupportedContent'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item active'>
						<a className='nav-link' href='/'>
							Home
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='/login'>
							Login
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='/signup'>
							Signup
						</a>
					</li>
				</ul>
			</div>

			<form className='form-inline'>
				<div className='row'>
					<div className='col'>
						<input
							className='form-control mr-sm-2 search'
							type='search'
							placeholder='Search'
							aria-label='Search'
						/>
					</div>
					<div className='col'>
						<button
							className='btn btn-outline-success my-2 my-sm-0'
							type='submit'
						>
							Search
						</button>
					</div>
				</div>
			</form>
		</nav>
	);
};
export default Navbar;
