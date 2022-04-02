import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
	return (
		<nav>
			<li>
				<Link to="/">Homed</Link>
			</li>
			<li>
				<Link to="/about-us">About Us</Link>
			</li>
		</nav>
	)
}
export default Navigation;