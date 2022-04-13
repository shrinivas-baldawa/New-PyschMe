import Services from "./components/Services";
import Newlogin from "./components/Newlogin";
import Error from "./components/Error";
import Forgotpassword from "./components/Forgotpassword";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import About from "./components/About";
import Home from "./components/Home";
import MainDashboard from './components/MainDashboard'
import PaymentAndDoctorDetails from "./components/PaymentAndDoctorDetails";
import { Route, Switch } from "react-router";

function App() {

  return (
    <div>
      <main>
        <Switch>
          <Route path='/New-PyschMe/' component={Home} exact></Route>
          <Route path='/New-PyschMe/login' component={Newlogin} exact></Route>
          <Route path='/New-PyschMe/services' component={Services} exact></Route>
          <Route path='/New-PyschMe/forgotpassword' component={Forgotpassword} exact></Route>
          <Route path='/New-PyschMe/contact' component={Contact} exact></Route>
          <Route path='/New-PyschMe/faq' component={Faq} exact></Route>
          <Route path='/New-PyschMe/aboutus' component={About} exact></Route>
          <Route path='/New-PyschMe/maindashboard' component={MainDashboard} exact></Route>
          <Route path='/New-PyschMe/paymentanddoctordetails' component={PaymentAndDoctorDetails} exact></Route>
          <Route component={Error}></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
