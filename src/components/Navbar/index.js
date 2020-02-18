import React, { Component } from 'react';
import './index.css';
import Logo from '../../images/logo.png';

export default class index extends Component {
	render() {
		return (
			<div className='nav-container'>
				<nav>
					<div className='flex-start'>
						<div className='logo'>
							<img src={Logo} alt='' />
						</div>
						<ul>
							<li>Découverte</li>
							<li>Séries TV</li>
							<li>Films</li>
							<li>Programmes originaux</li>
							<li>Ajouts récents</li>
							<li>Ma liste</li>
						</ul>
					</div>
					<div className='flex-end'>
						<i class='fas fa-search'></i>
						<div className='user-name'>JEUNESSE</div>
						<i class='fas fa-bell'></i>
						<i class='fas fa-user'></i>
					</div>
				</nav>
			</div>
		);
	}
}
