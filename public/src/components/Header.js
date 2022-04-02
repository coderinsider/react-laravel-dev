import {
   BrowserRouter as Router,
   Link
} from "react-router-dom";

const Header = ({token}) => {
	return (
		<header id="headerpanel">
			<div className="container">
				<div className="header-wrapper">
					<div className="header-left">
						<div className="header-logo">
							<img src="https://www.nicehash.com/static/currencies/btc.png" alt="logo"/>
						</div>
						<div className="header-nav">
							<ul>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/about-us">About us</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="header-right">
						<ul>
							<li>
								{
								(!token) ? 
								<Link to="/login">Login</Link>
								:
								null
								}
							</li>
							<li>
								{
								(!token) ? 	
								<Link to="/register">Register</Link>
								:  null
								}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	)
}
export default Header;