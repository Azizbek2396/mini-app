import React, {useEffect} from 'react';
import { connect } from 'react-redux';
// import { Router, Redirect } from '@reach/router';
import Navbar from './components/layout/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import Home from './components/home/Home';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Counter from './components/counter/Counter';
import AddList from './components/todoList/AddList';
import Post from './components/posts/Post';
import CourseListPage from './components/courses/CourseListPage';
import CourseDetailPage from './components/courses/CourseDetailPage';


function App({ loggedIn }) {

  const history = useHistory();
  useEffect(() => {
    if (loggedIn) {
      history.push('/');
    }
    else {
      history.push('/signin');
    }
  }, [history, loggedIn])
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/signin" component={SignIn}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="/counter" component={Counter}></Route>
        <Route exact path="/todo" component={AddList}></Route>
        <Route exact path="/post" component={Post}></Route>
        <Route exact path="/courses" component={CourseListPage}></Route>
        <Route exact path="/courses/:{courseId}" component={CourseDetailPage}></Route>
        <Redirect  to="/signin" />
      </Switch> 
      {/* <Router>
        <Redirect noThrow from="/" to="signin" />
        <Home path="/" />
        <SignIn path="/signin" />
        <SignUp path="/signup" />
        <Counter path="/counter" />
        <AddList path="/todo" />
        <Post path="/post" />
        <CourseListPage path="courses" />
        <CourseDetailPage path="/courses/:courseId" />
      </Router> */}
    </div>
  );
}

const mapState = (state) => {
  return {
    loggedIn: state.login.loggedIn
  }
}

export default connect(mapState)(App);
