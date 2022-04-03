import '../style/login.css';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import AboutUsDashboard from './AboutUsDashboard';
const LoginDashboard = ({setToken}) => {

	const [email, setEmail] = useState();
	const [userPassword, setPassword] = useState();


	const history = useHistory();

	const nameRequestAction = (evt) => {
		const email = evt.target.value;
		setEmail(email);
	}

	const passwordRequestAction = (evt) => {
		const requestPassword = evt.target.value;
		setPassword(requestPassword);
	}
	const requestAccountLogin = (evt) => {
		const configHeaders = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		const apiPath = 'http://127.0.0.1:8000/api/';
		const loginRecord = {
			email,
			password: userPassword
		}
		axios.post(`${apiPath}login`, loginRecord, configHeaders)
		.then((resp) => {
			console.log(resp.data.data.token);
			//sessionStorage.setItem('has_token', resp.data.data.token);
			setToken(resp.data.data);

			if(sessionStorage.has_token) {
				return <AboutUsDashboard  />
			}
		})
		.catch((error) => {
			console.log(error);
		});
		evt.preventDefault();
		console.log(email);
		console.log(userPassword);
	}

	return (
		<section id="logindash">
			<div className="login-card">
				<div className="card">
					<div className="card-header">
						Login
					</div>
					<div className="card-body">
						<form onSubmit={requestAccountLogin}>
							<div className="form-group custome-form-group">
								<label for="username" >Email Address</label>
						        <input 
						        onChange={nameRequestAction}
						        type="email" className="form-control" placeholder="Enter your email" />
					        </div>

					        <div className="form-group custome-form-group">
					        	<label for="password" >Password</label>
					        	
						        <input 
						        onChange={passwordRequestAction}
						        type="password" className="form-control" placeholder="Enter your password" />
						    </div>

						    <div className="form-group custome-form-group">
						    	<button 
						    	disabled={!userPassword}
						    	className="login-action">Login Account</button>
						    </div>
					        
				    	</form>
					</div>
				</div>
			</div>
    	</section>
	)
}
export default LoginDashboard;