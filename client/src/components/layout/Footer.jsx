import React from 'react';

const Footer = () => {
	return (
		<div style={{ margin: '22% 0 0 0' }}>
			<footer className='footer mt-auto py-4 bg-dark'>
				<div className='container'>
					<span style={{ marginRight: '30px', color: 'white' }}>
						Ecommerce store
					</span>
					<a className='text-muted' href='/' style={{ marginRight: '30px' }}>
						Home
					</a>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
