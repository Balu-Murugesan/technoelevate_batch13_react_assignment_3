import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Employeelist from "./Employeelist";
import Employeeportal from "./Employeeportal";
import Home from "./Home";
import Logout from "./Logout";

export  const Nav=(
    <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Employee Portal</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/Home">Home <span className="sr-only">(current)</span></Link>
      </li>
       <li className="nav-item">
        <Link className="nav-link" to="/Employeelist">EmployeeList</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Employeeportal">Employeeportal</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Logout">Logout</Link>
      </li>
     
      
    </ul>
  </div>
</nav>
  <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/Home" component={Home}/>
    <Route path="/Employeelist" component={Employeelist}/>
    <Route path="/Employeeportal" component={Employeeportal}/>
    <Route path="/Logout" component={Logout}/>
  </Switch>
</BrowserRouter>
)