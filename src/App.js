import './App.css';
import Header from './Header'
import Social from './Social'
import ProductLife from './ProductLife'
import Profile from './Profile'
import Company from './Company'
import Cisco from './Cisco'
import Nationwide from './Nationwide'
import Lloyds from './Lloyds'
import About from './About'
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Social />
            </Route>
            <Route exact path="/product-life">
              <ProductLife />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/company">
              <Company />
            </Route>
            <Route exact path="/company/cisco">
              <Cisco />
            </Route>
            <Route exact path="/company/lloyds">
              <Lloyds />
            </Route>
            <Route exact path="/company/nationwide">
              <Nationwide />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
