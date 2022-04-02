import '../../style/dashboard.css';

import React, { useState, useEffect} from 'react';
import EachPackage from './EachPackage';
import axios from 'axios';
const Dashboard = ({token}) => {
	const users = [
		{name:'1'},
		{name:'2'},
		{name:'3'}
	];
	const [results, setResults] = useState(users);
	console.log('Working');
	console.log(results);
	const httpConfig = {
		headers: {
			'Accept':'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	useEffect(() => {
		const productRecords = async () =>  {
			const response =  await axios.get(`http://127.0.0.1:8000/api/codigo/products/records`, httpConfig);
			setResults(response.data.data.pack_list);
		}
		productRecords();
		
	}, []);



	return (
		<section id="package-wrapper">
			<div className="container">
				<div className="package-boxs">
					{ results.map((item, key) => (
						<EachPackage item={item} key={key}/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Dashboard;