import React from 'react';
import { useCookies } from 'react-cookie';

const Navbar = () => {
	const [cookies, setCookie, removeCookie] = useCookies();

	function logOut() {
		removeCookie('user_name');
	}

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
					{!cookies.user_name ? (
						<React.Fragment>
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
						</React.Fragment>
					) : (
						<li className='nav-item'>
							<a className='nav-link' href='/create-product'>
								Add Product (Admin)
							</a>
						</li>
					)}
					<li className='nav-item'>
						<a className='nav-link' href='/cart'>
							Cart
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
					{cookies.user_name ? (
						<div className='col'>
							<p>Logged in as: {cookies.user_name}</p>
							<button className='btn' type='button' onClick={logOut}>
								Logout
							</button>
						</div>
					) : null}
				</div>
			</form>
		</nav>
	);
};
export default Navbar;
