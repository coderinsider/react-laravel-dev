import '../../style/packagedetail.css';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import  AboutUsDashboard from '../AboutUsDashboard';
import axios from 'axios';
const PackageDetail = ({token}) => {
	const history = useHistory();
	const [packdata, setPackData] = useState({});
	const [promocode, setPromoCode] = useState(false);
	const [requestCode, setRequestCode] = useState("");
	const [promotecodeMessage, setPromoteMessage] = useState("");
	const [promoteColor, setPromoteColor] = useState("");
	const [subTotalData, setSubTotalData] = useState("");
	console.log(requestCode);
	useEffect(() => {
		classPackList();
		console.log(packdata);
	}, []);

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
	const classPackList = () => {
		const uuid = window.location.href.split("/")[5];
		axios.get(`http://127.0.0.1:8000/api/codigo/products/records/${uuid}`, httpHeaderConfig())
		.then((resp) => {
			setPackData(resp.data.data.pack_list[0])
		})
		.catch((error) => {
			console.log(error);
		})
		
	} 

	const GrandTotal = (price) => {
		// GET the GST
		const defaultPrice = price;
		const parcentage = 7 / 100;
		const totalValue = defaultPrice - (defaultPrice * parcentage);
		
		
		
		if(promocode) {
			const result = Number(totalValue) + Number(defaultPrice - totalValue) - Number(defaultPrice - totalValue);
			return result.toFixed(2);
		} else {
			const result = Number(totalValue) + Number(defaultPrice - totalValue);
			return result.toFixed(2);
		}
		
	}
	const subTotal = (price) => {
		const defaultPrice = price;
		const parcentage = 7 / 100;
		const totalValue = defaultPrice - (defaultPrice * parcentage);
		return totalValue.toFixed(2);
	}
	const gstPrice = (price) => {
		// 7 Parce GST
		const defaultPrice = price;
		const parcentage = 7 / 100;
		const totalValue = defaultPrice - (defaultPrice * parcentage);
		return Number(defaultPrice - totalValue).toFixed(2);
	}
	const discountPrice = (price) => {
		// 7 Parce
		const defaultPrice = price;
		const parcentage = 7 / 100;
		const totalValue = defaultPrice - (defaultPrice * parcentage);
		//return totalValue.toFixed(2);
		if(promocode) {
			return Number(defaultPrice - totalValue).toFixed(2);
		} else {
			return "00.00";
		}
		
	}
	// Getting data result for procode

	const CheckPromoteCode = (evt) => {
		evt.preventDefault();
		const dataRec = {
			promo_code: requestCode
		}

		axios.post('http://127.0.0.1:8000/api/codigo/products/promote/findcode', dataRec, httpHeaderConfig())
		.then((resp) => {
			if(resp.data.status) {
				setPromoCode(true);
				setPromoteMessage('Your promote code is success');
				setPromoteColor('#00C3CF');
			} else {
				setPromoteMessage('Your promote code is wrong');
				setPromoteColor('red');
			}
			console.log(resp.data);

		})
		.catch((error) => {
			console.log(error);
		})
	}
	// Pay Now
	const PayNowProcess = () => {
		const saveRecords = {
            'order_name': packdata.total_credit + " " + packdata.pack_name,
            'product_id': packdata.id,
            'total_credit': packdata.total_credit,
            'pack_price': packdata.pack_price,
            'subtotal': subTotal(packdata.pack_price),
            'gst': gstPrice(packdata.pack_price),
            'discount': discountPrice(packdata.pack_price),
            'grand_total': GrandTotal(packdata.pack_price),
            'order_status': 'COMPLETED',
		}
		console.log(saveRecords);

		axios.post('http://127.0.0.1:8000/api/codigo/order/record', saveRecords, httpHeaderConfig())
		.then((resp) => {
			if(resp.data.status) {
				//return window.location.href=`/profile/package/${packdata.pack_id}/completed`;		
				history.push(`/profile/package/completed/${packdata.id}`);
			} else {
				console.log('Something wrong');
			}
		})
		.catch((error) => {
			console.log(error);
		})
	}
	return (
		<section id="class-pack-main">
			<div className="container">
				<div className="class-pack-box">
					<div className="class-pack-head">
						<h3>class pack purchase preview</h3>
					</div>
					<div className="inside-box-wrapper">
						<div className="inside-box-title">
							<p>You have selected</p>
						</div>

						<div className="class-box-body-wrapper">
							<div className="class-box-body-left">
								<div className="promote-package-detail">
									<div className='countcircle'>
										<p>{packdata.total_credit}</p>
									</div>
									<div className="classpack-show-content">
										<div className="class-pack-show-name">
											<p>{packdata.pack_name}</p>
										</div>
										<div className="class-pack-show-desc">
											<p>Newbie get 1 class fee!</p>
										</div>
									</div>
								</div>
								<div className="promode-apply">
									<form onSubmit={CheckPromoteCode}>
										<div className="form-group custome-promote-group">
											<input 
											onChange={(e) => setRequestCode(e.target.value)}
											className="custom-promote form-control" placeholder="Promote Code"/>
											<button disabled={promocode} className="apply-button">Apply</button>
										</div>
										<span style={{color: promoteColor}} className="status-success">{promotecodeMessage}</span>
									</form>
								</div>
							</div>
							<div className="class-box-body-right">
								<div className="class-pack-price">
									<p>${packdata.pack_price}.00</p>
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
										<p>${subTotal(packdata.pack_price)}</p>
									</div>									
								</div>
								<div className="subtotal-each">
									<div className="subtotal-name">
										<p>GST</p>
									</div>
									<div className="subtotal-value">
										<p>${gstPrice(packdata.pack_price)}</p>
									</div>									
								</div>	
								<div className="subtotal-each">
									<div className="subtotal-name">
										<p className="bold-me">Discount</p>
									</div>
									<div className="subtotal-value">
										<p className="bold-me">-${discountPrice(packdata.pack_price)}</p>
									</div>									
								</div>	
								<div className="subtotal-each">
									<div className="subtotal-name">
										<p className="bold-me">Grand Total</p>
									</div>
									<div className="subtotal-value">
										<p className="bold-me grand-color">${GrandTotal(packdata.pack_price)}</p>
									</div>									
								</div>																							
							</div>
						</div>
					</div>
					<div className="class-pack-footer-action">
						<div className="term-codition">
							<p>Please read all <Link to="/">Terms & Coditions</Link> before purchasing your YM Class or Class Pack</p>
						</div>

						<div className="payment-action">
							<div className="payment-left">
								<Link to="/profile/dashboard">Back</Link>
							</div>
							<div className="payment-right">
								<button className="payment-button" onClick={PayNowProcess}>Pay Now</button>
							</div>
						</div>
					</div>
				</div>	
			</div>
		</section>
	);
}
export default PackageDetail;