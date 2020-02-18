import React, { Component } from 'react';
import './index.css';
import MovieName from '../../images/moivename.png';
import BannerBackground from '../../images/banner.png';

class index extends Component {
	render() {
		return (
			<div className='banner'>
				<div className='content'>
					<div className='author'>
						<span>NETFLIX</span>Original
					</div>
					<div className='movie-name'>
						<img src={MovieName} alt='' />
					</div>
					<div className='season'>Regardez la saison 30 maintenant</div>
					<div className='discrip'>
						Le cartel de Cali reprend le pouvoir en Colombie. Les successeurs
						d’Escobar passent à l’action et déclarent la guerre au gouvernement.
					</div>
					<div className='buttons'>
						<button>play</button>
						<button>mylist</button>
					</div>
				</div>
			</div>
		);
	}
}

export default index;
