import React, { Component } from 'react';
import './index.css';
import Movie from '../../images/movie.png';
import Movie2 from '../../images/movie2.png';

export default class index extends Component {
	render() {
		return (
			<div className='movie-lists'>
				<div className='movie-list'>
					<div className='collection'>Revoir</div>
					<div className='movies'>
						<div className='movie'>
							<img src={Movie} alt='' />
						</div>
						<div className='movie'>
							<img src={Movie2} alt='' />
						</div>
						<div className='movie'>
							<img src={Movie} alt='' />
						</div>
						<div className='movie'>
							<img src={Movie2} alt='' />
						</div>
						<div className='movie'>
							<img src={Movie} alt='' />
						</div>
						<div className='movie'>
							<img src={Movie2} alt='' />
						</div>
					</div>
				</div>

				<div className='movie-list'>
					<div className='collection'>Tendances actuelles</div>
					<div className='movies'>
						<div className='movies'>
							<div className='movie'>
								<img src={Movie2} alt='' />
							</div>
							<div className='movie'>
								<img src={Movie} alt='' />
							</div>
							<div className='movie'>
								<img src={Movie2} alt='' />
							</div>
							<div className='movie'>
								<img src={Movie} alt='' />
							</div>
							<div className='movie'>
								<img src={Movie2} alt='' />
							</div>
							<div className='movie'>
								<img src={Movie} alt='' />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
