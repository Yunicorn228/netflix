import React, { Component } from 'react';
import './index.css';
import Triangle from '../../images/Triangle 1.svg';

class index extends Component {
	render() {
		return (
			<div className='banner2-movies-list'>
				<div className='banner2-movie-container'>
					<div className='banner2-movie'>
						<div className='banner2-circle'>
							<img src={Triangle} alt='' />
						</div>
					</div>
					<div className='banner2-underline'>
						L’âge d’or du cinéma polonais (juillet 2018)
					</div>
				</div>

				<div className='banner2-movie-container'>
					<div className='banner2-movie'>
						<div className='banner2-circle'>
							<img src={Triangle} alt='' />
						</div>
					</div>
					<div className='banner2-underline'>
						La nouvelle vague française (juin 2018)
					</div>
				</div>

				<div className='banner2-movie-container'>
					<div className='banner2-movie'>
						<div className='banner2-circle'>
							<img src={Triangle} alt='' />
						</div>
					</div>
					<div className='banner2-underline'>Direction Cannes (mai 2018)</div>
				</div>
			</div>
		);
	}
}

export default index;
