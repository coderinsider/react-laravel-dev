import '../style/login.css';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
const LoginDashboard = () => {

	const [userName, setUserName] = useState();
	const [userPassword, setPassword] = useState();


	const history = useHistory();

	const nameRequestAction = (evt) => {
		const requestName = evt.target.value;
		setUserName(requestName);
	}

	const passwordRequestAction = (evt) => {
		const requestPassword = evt.target.value;
		setPassword(requestPassword);
	}
	const requestAccountLogin = (evt) => {
		// const httpConfig = {
		// 	headers: {
		// 		'Accept':'application/json',
		// 		'Authorization': 'Bearer ' +'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTZlMTQ1NjEzOTJhNTExNDYzNTg4ZmFiMTk3ZTQxMjVhY2FlZDJkZWU3NjgzMDMwY2ZkODI0ZDg0NDc1NTE1NmZkYzU5ODIxM2E3MWFmYzgiLCJpYXQiOjE2NDg4ODMyNjIuNDQzMjE0LCJuYmYiOjE2NDg4ODMyNjIuNDQzMjE1LCJleHAiOjE2ODA0MTkyNjIuNDQxNzk5LCJzdWIiOiI2MiIsInNjb3BlcyI6W119.pmuVe2qtbFWOWtFFrrNOFBQsDPWay1_wwzIeQ24oefNdR6H6cfz0d6-AkfHmBdzeRMf29QFue7HaWnsMsWrjMpsJ6Zf4E1BDakw5YySVlrgZ0QUVAPm5xPMPQumYZVtkip4F9DT4hJTLtXNIOXy2SbhD8iv2TcuI2fmRU7wowB5JP_4E415__oglsCz2TmIylnb_ESPvsZ65SCAH1gzBRgamHE1-s2KI4MUL2HiGVLP4zK8fL4Yf7jqAZ0jd8PNiGvgwAP4Pm_1N_15Szbfyvig6bsIjn6uFl6suH1sg6fE6NERqHl7d4w669MhCDoDU9x0KRK8JVLPidrLe8ePRp7SIUgQYX6eqKUJTmW-t4Iy0uxFFgflcHh8HnrSoqDaicnEqXnZGf7GyxaLdlz24SO9OAClVLDtWBPHblQyYDMXG4sNdhuGVUAr31SCluGhJam720oyLLgIG5MTgeP3YHp7q6gZ2S0qId52NqUg3Q7G7S5Zin0h5f4QHIJr_hn58dLS1R-zP3h1VG_5YIlppvYq5fwOijNRNfzsDGIK9xAIEvUz7x8Q6PJV9zAQDd87k-nQcdzn6SwB2OC6pDa7cd_MCNZ24AeRukj1OsMm0kGsrPpYlOWSZAzaVbynoVj8WgxuU0o3tcr9k3b7MyJlOcnzwuxUd0Fb0cO7t0wTf8-k',
		// 	}
		// }
			const configHeaders = {
				headers: {
					'Content-Type': 'application/json'
				}
			};
			const apiPath = 'http://127.0.0.1:8000/api/';
			const loginRecord = {
				email: userName,
				password: userPassword
			}
			axios.post(`${apiPath}login`, loginRecord, configHeaders)
			.then((resp) => {
				console.log(resp);
			})
			.catch((error) => {
				console.log(error);
			});
		evt.preventDefault();
		console.log(userName);
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