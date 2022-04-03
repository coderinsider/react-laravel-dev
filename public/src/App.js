import Header from './components/Header';
import {useState} from 'react';
import HomeDashBoard from './components/HomeDashBoard';
import LoginDashboard from './components/LoginDashboard';
import AboutUsDashboard from './components/AboutUsDashboard';
//
import Dashboard from './components/Private/Dashboard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import useToken from './useToken';
import PackageDetail from './components/Private/PackageDetail';
const App = () => {
   const {token, setToken} = useToken();
   console.log('This is a token');
   console.log(token);
   return (
      <Router>
         <Header token={token}/>
         <Switch>
            <Route exact path="/">
               <HomeDashBoard />
            </Route>
            <Route path="/login">
              {
               (!token) ?
               <LoginDashboard setToken={setToken}/>
               :
               <Redirect to="/profile/dashboard" />
              }
         
            </Route>
            <Route path="/about-us">
               <AboutUsDashboard />
            </Route>
            <Route path="/profile/dashboard">
               {
               (token) ?
               <Dashboard token={token}/>
               :
               <Redirect to="/login" />
               }
            </Route>

            <Route path="/profile/:id">
               {
               (token) ?
               <PackageDetail token={token}/>
               :
               <Redirect to="/login" />
               }
            </Route>
         </Switch>  
      </Router>
      
   );
}  
export default App;
