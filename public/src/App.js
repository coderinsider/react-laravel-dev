import Header from './components/Header';
import HomeDashBoard from './components/HomeDashBoard';
import LoginDashboard from './components/LoginDashboard';
import AboutUsDashboard from './components/AboutUsDashboard';
import Navigation from './components/Navigation';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
   return (
      <Router>
         <Header />
         <Switch>
            <Route exact path="/" component={HomeDashBoard}/>
            <Route path="/login" component={LoginDashboard}/>
            <Route path="/about-us" component={AboutUsDashboard}/>
         </Switch>  
      </Router>
      
   );
}  
export default App;
