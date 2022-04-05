import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
	return (
		<div className='spinner'>
			<img src={spinner} alt='Loading...' style={{ width: '250px' }}></img>
		</div>
	);
};

export default Spinner;
