import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import SideBar from './components/DashBoard/SideBar/SideBar';
import BlogDetails from './components/BlogDetails/BlogDetails';
import AddBlogs from './components/DashBoard/AddBlogs/AddBlogs';
import ManageBlogs from './components/DashBoard/ManageBlogs/ManageBlogs';
import AddAdmin from './components/DashBoard/AddAdmin/AddAdmin';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <p style={{textAlign: 'center'}}>User Email: {loggedInUser.email}</p>
        <Switch>
          <PrivateRoute path="/dashboard">
            <SideBar></SideBar>
          </PrivateRoute>
          <Route path="/blogs/:_id">
            <BlogDetails></BlogDetails>
          </Route>
          <Route path="/addBlogs">
            <AddBlogs></AddBlogs>
          </Route>
          <Route path="/manageBlogs">
            <ManageBlogs></ManageBlogs>
          </Route>
          <Route path="/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
