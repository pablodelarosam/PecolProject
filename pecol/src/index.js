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
import Account from './Account';
import Module from './Module';
import Definition from './Definition'
import Activity from './Activity'
import Links from './Links'
import CreateTeacher from './CreateTeacher'


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
        <Route path="/listCourses/:id" component={ListCourses} />
        <Route path="/courseDetails/:id" component={CourseDetails} />
        <Route path="/grades" component={Grades} />
        <Route path="/academicHistory" component={AcademicHistory} />
        <Route path="/account" component={Account} />
        <Route path="/module/:id" component={Module} />
        <Route path="/definition" component={Definition} />
        <Route path="/activity/:id" component={Activity} />
        <Route path="/links" component={Links} />
        <Route path="/createTeacher" component={CreateTeacher} />
      </div>
  </Router>,document.getElementById('root'));
registerServiceWorker();
