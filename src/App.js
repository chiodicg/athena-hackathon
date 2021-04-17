import './App.css';
import Content from './ProductLife'
import Header from './Header'
import Social from './Social'
import ProductLife from './ProductLife'
import Profile from './Profile'
import Company from './Company'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Social />
        <ProductLife />
        <Profile />
        <Company />
      </div>
    </div>
  );
}

export default App;
