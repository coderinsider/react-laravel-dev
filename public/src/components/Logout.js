import { useHistory } from 'react-router-dom';
const Logout = ({token}) => {
	sessionStorage.removeItem('token');
	const history = useHistory();
	window.location.href = '/';

}
export default Logout;