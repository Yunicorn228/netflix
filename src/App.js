import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MovieLists from './components/MovieList';
import Banner2 from './components/Banner2';
import MovieLists2 from './components/MovieList2';

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Banner />
			<MovieLists />
			<Banner2 />
			<MovieLists2 />
		</React.Fragment>
	);
}

export default App;
