import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route,
} from "react-router-dom";

import Home from './pages/home';
import Product from './pages/product';
import ProductEdit from './pages/productedit';

function App() {
  return (
    <Router>
      <ul className="navBar">
        <li>
          <NavLink exact to="/" id="home">Home</NavLink>
        </li>
      </ul>
        
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path='/product/:productId' element={<Product/>} />
        <Route exact path="/product/:productId/edit" element={<ProductEdit/>} />
      </Routes>
    </Router>
  );
}

export default App;
