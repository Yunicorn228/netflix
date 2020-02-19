import React, { Component } from 'react';
import './index.css';

export default class index extends Component {
	render() {
		return (
			<footer>
				<div className='icon-list'>
					<i class='fab fa-facebook-square'></i>
					<i class='fab fa-instagram'></i>
					<i class='fab fa-twitter'></i>
					<i class='fab fa-youtube'></i>
				</div>

				<div className='links'>
					<div className='column'>
						<a href=''>Audio et sous-titres</a>
						<a href=''>Presse</a>
						<a href=''>Confidentialité</a>
						<a href=''>Nous contacter</a>
					</div>
					<div className='column'>
						<a href=''>Autodescription</a>
						<a href=''>Relations investisseurs</a>
						<a href=''>Informations légales</a>
					</div>
					<div className='column'>
						<a href=''>Centre d’aide</a>
						<a href=''>Recrutement</a>
						<a href=''>Préférences de cookies</a>
					</div>
					<div className='column'>
						<a href=''>Centre d’aide</a>
						<a href=''>Recrutement</a>
						<a href=''>Préférences de cookies</a>
					</div>
				</div>

				<button>Service Code</button>
				<div className='copy-right'> © 1997-2018 Netflix, Inc. </div>
			</footer>
		);
	}
}
