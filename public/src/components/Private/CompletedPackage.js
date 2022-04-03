import '../../style/packagedetail.css';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
const CompletedPackage = ({token}) => {
	const history = useHistory();
	const [packdata, setPackData] = useState({});
	const [promocode, setPromoCode] = useState(false);
	const [requestCode, setRequestCode] = useState("");
	const [promotecodeMessage, setPromoteMessage] = useState("");
	const [promoteColor, setPromoteColor] = useState("");
	const [subTotalData, setSubTotalData] = useState("");
	const [completedData, setCompletedData] = useState("");
	console.log(requestCode);


	const httpHeaderConfig = () => {
		const httpConfig = {
			headers: {
			'Accept':'application/json',
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
			}
		}
		return httpConfig;
	}


	useEffect(() => {
		CompleteAction();
	},[])
	const CompleteAction = () => {
		const uuid = window.location.href.split("/")[6];
		axios.get(`http://127.0.0.1:8000/api/codigo/order/record/findByOne/${uuid}`, httpHeaderConfig())
		.then((resp) => {
			console.log(`AAA ${uuid}`);

			console.log(resp.data);
			setCompletedData(resp.data.data)
		})
		.catch((error) => {
			console.log(error);
		});
	}


	return (
		<section id="class-pack-main">
			<div className="container">
				<div className="class-pack-box">
					<div className="class-pack-head">
						<h3>thank you! you have successfully purchased a class pack</h3>
					</div>
					<div className="inside-box-wrapper">
						<div className="inside-box-title">
							<p>You have selected</p>
						</div>

						<div className="class-box-body-wrapper">
							<div className="class-box-body-left">
								<div className="promote-package-detail">
									<div className='countcircle'>
										<p>{completedData.total_credit}</p>
									</div>
									<div className="classpack-show-content">
										<div className="class-pack-show-name">
											<p>{completedData.order_name}</p>
										</div>
										<div className="class-pack-show-desc">
											<p>Newbie get 1 class fee!</p>
										</div>
									</div>
								</div>

							</div>
							<div className="class-box-body-right">
								<div className="class-pack-price">
									<p>${completedData.pack_price}.00</p>
								</div>
							</div>

						</div>
						<div className="sub-total-wrapper">
							<div className="sub-total-lists">
								<div className="subtotal-each">
									<div className="subtotal-name">
										<p>Subtotal</p>
									</div>
									<div className="subtotal-value">
										<p>${completedData.subtotal}</p>
									</div>									
								</div>
								<div className="subtotal-each">
									<div className="subtotal-name">
										<p>GST</p>
									</div>
									<div className="subtotal-value">
										<p>${completedData.gst}</p>
									</div>									
								</div>	
								<div className="subtotal-each">
									<div className="subtotal-name">
										<p className="bold-me">Discount</p>
									</div>
									<div className="subtotal-value">
										<p className="bold-me">-${completedData.discount}</p>
									</div>									
								</div>	
								<div className="subtotal-each">
									<div className="subtotal-name">
										<p className="bold-me">Grand Total</p>
									</div>
									<div className="subtotal-value">
										<p className="bold-me grand-color">${completedData.grand_total}</p>
									</div>									
								</div>																							
							</div>
						</div>
					</div>
				</div>	
			</div>
		</section>
	);
}
export default CompletedPackage;