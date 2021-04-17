import './App.css';
import Content from './ProductLife'
import Header from './Header'
import Feed from './Feed'
import ProductLife from './ProductLife'
import Profile from './Profile'
import Company from './Company'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Feed />
        <ProductLife />
        <Profile />
        <Company />
      </div>
    </div>
  );
}

export default App;
