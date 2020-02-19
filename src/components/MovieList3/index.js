import React, { Component } from 'react';
import './index.css';
import Movie1 from '../../images/list3-1.png';
import Movie2 from '../../images/list3-2.png';

class index extends Component {
	render() {
		return (
			<div className='list3'>
				<div className='list3-title'>
					PROGRAMMES ORIGINAUX NETFLIX
					<i class='fas fa-chevron-right'></i>
				</div>
				<div className='list3-movies'>
					<div className='list3-movie'>
						<img src={Movie1} alt='' />
					</div>
					<div className='list3-movie'>
						<img src={Movie2} alt='' />
					</div>
					<div className='list3-movie'>
						<img src={Movie1} alt='' />
					</div>
					<div className='list3-movie'>
						<img src={Movie2} alt='' />
					</div>
					<div className='list3-movie'>
						<img src={Movie1} alt='' />
					</div>
					<div className='list3-movie'>
						<img src={Movie2} alt='' />
					</div>
					<div className='list3-movie'>
						<img src={Movie1} alt='' />
					</div>
				</div>
			</div>
		);
	}
}

export default index;
