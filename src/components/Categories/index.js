import React, { Component } from 'react';
import './index.css';

export default class index extends Component {
	render() {
		return (
			<div className='categories'>
				<div className='list3-title'>Catégories</div>
				<div className='cat-list'>
					<div className='cat-box red'>
						<div className='cat-box-title'>Sheldon</div>
						<i class='fas fa-chevron-down'></i>
					</div>
					<div className='cat-box orange'>
						<div className='cat-box-title'>Action</div>
						<i class='fas fa-chevron-down'></i>
					</div>
					<div className='cat-box yellow'>
						<div className='cat-box-title'>Drama</div>
						<i class='fas fa-chevron-down'></i>
					</div>
					<div className='cat-box green'>
						<div className='cat-box-title'>Funny</div>
						<i class='fas fa-chevron-down'></i>
					</div>
					<div className='cat-box light-green'>
						<div className='cat-box-title'>Ip Man</div>
						<i class='fas fa-chevron-down'></i>
					</div>
					<div className='cat-box blue'>
						<div className='cat-box-title'>Lanpian</div>
						<i class='fas fa-chevron-down'></i>
					</div>
					<div className='cat-box purple'>
						<div className='cat-box-title'>Haopian</div>
						<i class='fas fa-chevron-down'></i>
					</div>
				</div>
			</div>
		);
	}
}
