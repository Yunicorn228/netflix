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
						<div className='inner-layer'>
							<div className='movie'>
								<img src={Movie} alt='' />
								<div className='phone-dis'>짐 제프리</div>
							</div>
						</div>
						<div className='inner-layer'>
							<div className='movie'>
								<img src={Movie2} alt='' />
								<div className='phone-dis'>미스터선샤인</div>
							</div>
						</div>
						<div className='inner-layer'>
							<div className='movie'>
								<img src={Movie} alt='' />
								<div className='phone-dis'>미스터선샤인</div>
							</div>
						</div>
						<div className='inner-layer'>
							<div className='movie'>
								<img src={Movie2} alt='' />
								<div className='phone-dis'>미스터선샤인</div>
							</div>
						</div>
						<div className='inner-layer'>
							<div className='movie'>
								<img src={Movie} alt='' />
								<div className='phone-dis'>미스터선샤인</div>
							</div>
						</div>
						<div className='inner-layer'>
							<div className='movie'>
								<img src={Movie2} alt='' />
								<div className='phone-dis'>미스터선샤인</div>
							</div>
						</div>
					</div>
				</div>

				<div className='movie-list list2'>
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
