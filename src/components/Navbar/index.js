import React, { Component } from 'react';
import './index.css';
import Logo from '../../images/logo.png';
import PhoneTv from '../../images/phoneTv.svg';

export default class index extends Component {
	state = {
		isDropDownActive: false,
	};
	dropDownClassName = () => {
		if (this.state.isDropDownActive) {
			return 'nav-dropdown active';
		}
		return 'nav-dropdown';
	};

	handleDropDownActive = () => {
		this.setState({ isDropDownActive: true });
		console.log(true);
	};
	handleDropdownDeactivate = () => {
		this.setState({ isDropDownActive: false });
		console.log(false);
	};

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
					<div className='phone-tv'>
						<img src={PhoneTv} alt='' />
					</div>
					<div className='flex-end'>
						<i class='fas fa-search'></i>
						<div
							className='user-name'
							onMouseEnter={this.handleDropDownActive}
							onMouseLeave={this.handleDropdownDeactivate}>
							JEUNESSE
							<div className={this.dropDownClassName()}>
								<div className='sign-in'>
									<a href=''>sign in</a>
								</div>
								<div className='sign-out'>
									<a href=''>sign out</a>
								</div>
								<div className='vip'>Beconme VIP</div>
							</div>
						</div>
						<i class='fas fa-bell'></i>
						<i class='fas fa-user'></i>
					</div>
				</nav>
			</div>
		);
	}
}
