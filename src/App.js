import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Component/pages/Home";
import About from './Component/pages/About';
import Contact from './Component/pages/Contact';
import Navbar from "./Component/Layout/NavBar";
import NotFound from './Component/pages/NotFound';
import AddUser from './Component/users/AddUser';
import EditUser from './Component/users/EditUser';
import ViewUser from './Component/users/ViewUser';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/adduser" component={AddUser} />
          <Route exact path="/user/edituser/:id" component={EditUser} />
          <Route exact path="/user/viewuser/:id" component={ViewUser} />
          <Route component={NotFound} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
