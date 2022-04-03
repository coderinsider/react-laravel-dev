import TeamImg from '../../images/mail.jpeg';
import {
   Link
} from "react-router-dom";
const EachPackage = ({item}) => {
	const perPrice = () => {
		const results = item.pack_price / item.total_credit;
		return '$' + results.toFixed(2) + " ";
	}
	return (
		<div className="each-package">
			<Link to={`package/${item.pack_id}`}>
				<div className="first-row">
					{(item.tag_name !== null) ?
					<div className="box-top-bar">
						<p>{item.tag_name}</p>
					</div>
					: null
					}

					<div className="right-top-corner">
						<img src={TeamImg} alt="Team" />
					</div>
				</div>
				<div className="content-body">
					<div className="package-name">
						<p>{item.total_credit} {item.pack_name}</p>
					</div>
					<div className='count-circle'>
						<p>{item.total_credit}</p>
					</div>

					<div className='content-description'>
						<p>
							{ item.pack_description }
						</p>
					</div>
				</div>

				<div className='content-body'>
					<div className="price-package">
						<p>${item.pack_price}.00</p>
						<span>
						{
							perPrice()
						}
						 per class</span>
					</div>
				</div>
			</Link>	
		</div>
	);
}
export default EachPackage;