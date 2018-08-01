import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Normateca from './Normateca';
import Advertisement from './Advertisement';
import Teacher from './Teacher'
import ListCourses from './ListCourses'
import CourseDetails from './CourseDetails'
import Grades from './Grades'
import AcademicHistory from './AcademicHistory'
import Account from './Account'


ReactDOM.render(  <Router>
      <div>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/normateca" component={Normateca} />
        <Route path="/advertisement" component={Advertisement} />
        <Route path="/teacher" component={Teacher} />
        <Route path="/listCourses" component={ListCourses} />
        <Route path="/courseDetails" component={CourseDetails} />
        <Route path="/grades" component={Grades} />
        <Route path="/academicHistory" component={AcademicHistory} />
        <Route path="/account" component={Account} />
      </div>
  </Router>,document.getElementById('root'));
registerServiceWorker();
