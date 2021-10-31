import Services from "./components/Services";
import Newlogin from "./components/Newlogin";
import Error from "./components/Error";
import Forgotpassword from "./components/Forgotpassword";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import About from "./components/About";
import Home from "./components/Home";
import MainDashboard from './components/MainDashboard'
import { Route, Switch } from "react-router";

function App() {

  return (
    <div>
      <main>
        <Switch>
          <Route path='/' component={Home} exact></Route>
          <Route path='/login' component={Newlogin} exact></Route>
          <Route path='/services' component={Services} exact></Route>
          <Route path='/forgotpassword' component={Forgotpassword} exact></Route>
          <Route path='/contact' component={Contact} exact></Route>
          <Route path='/faq' component={Faq} exact></Route>
          <Route path='/aboutus' component={About} exact></Route>
          <Route path='/maindashboard' component={MainDashboard} exact></Route>
          <Route component={Error}></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
