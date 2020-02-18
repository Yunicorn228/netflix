import React, { Component } from 'react';
import './index.css';
import Title from '../../images/banner2-title.svg';
import Name from '../../images/Polonais.svg';
import Triangle from '../../images/Triangle 1.svg';

class index extends Component {
	render() {
		return (
			<div className='banner2'>
				<div className='content'>
					<div className='banner2-title'>
						<img src={Title} alt='' />
					</div>
					<div className='banner2-movie-name'>
						<img src={Name} alt='' />
					</div>
					<div className='banner2-release'>
						Netflix Découverte - Juillet 2018
					</div>
					<div className='banner2-discrip'>
						Andrzej Wajda, Roman Polański, Agnieszka Holland, Paweł Pawlikowski…
						Découvrez ceux qui ont fait connaitre le cinéma polonais sur la
						scène internationale.
					</div>
				</div>
			</div>
		);
	}
}

export default index;
