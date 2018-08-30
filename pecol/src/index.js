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
import CreateRule from './CreateRule'
import CreateStudent from './CreateStudent'
import CreateCourse from './CreateCourse'
import CreateLink from './CreateLink'
import Stadistics from './Stadistics'
import CreateAdvertisement from './CreateAdvertisement'
import Crossword from './Crossword'
import MultipleQuestion from './MultipleQuestion'
import ActivityDetails from './ActivityDetails'
import CreateActivity from './CreateActivity'

ReactDOM.render(  <Router>
      <div>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/normateca/:id" component={Normateca} />
        <Route path="/advertisement/:id" component={Advertisement} />
        <Route path="/teacher/:id" component={Teacher} />
        <Route path="/listCourses/:id" component={ListCourses} />
        <Route path="/courseDetails/:idStudent/:idCourse" component={CourseDetails} />
        <Route path="/grades" component={Grades} />
        <Route path="/academicHistory" component={AcademicHistory} />
        <Route path="/account/:id" component={Account} />
        <Route path="/module/:idStudent/:idCourse" component={Module} />
        <Route path="/definition" component={Definition} />
        <Route path="/activity/:idStudent/:idModule" component={Activity} />
        <Route path="/activityDetails/:idStudent/:type/:idActivity" component={ActivityDetails} />
        <Route path="/createActivity" component={CreateActivity} />
        <Route path="/links" component={Links} />
        <Route path="/createTeacher" component={CreateTeacher} />
        <Route path="/createRule" component={CreateRule} />
        <Route path="/createStudent" component={CreateStudent} />
        <Route path="/createCourse" component={CreateCourse} />
        <Route path="/createLink" component={CreateLink} />
        <Route path="/stadistics" component={Stadistics} />
        <Route path="/createAdvertisement" component={CreateAdvertisement} />
      </div>
  </Router>,document.getElementById('root'));
registerServiceWorker();
