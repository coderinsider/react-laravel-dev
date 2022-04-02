import TeamImg from '../../images/mail.jpeg';
const EachPackage = ({item}) => {
	return (
		<div className="each-package">
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
					<p>{item.pack_name}</p>
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
				</div>
			</div>

		</div>
	);
}
export default EachPackage;