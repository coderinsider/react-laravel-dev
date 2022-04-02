import {
   BrowserRouter as Router,
   Switch,
   Routes,
   Route
} from "react-router-dom";
import LoginDashboard from './LoginDashboard';
import HomeDashBoard from './HomeDashBoard';
import AboutUsDashboard from './AboutUsDashboard';
const BodyContent = () => {
	return (
		<p>hello body</p>
	);
}
export default BodyContent;