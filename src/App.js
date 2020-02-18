import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Banner />
		</React.Fragment>
	);
}

export default App;
