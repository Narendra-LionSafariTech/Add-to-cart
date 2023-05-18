import './App.css';
import Header from './component/Header';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './component/Home';
import Cart from './component/Cart';


function App() {
  // const [cart,setCart]=useState([])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={<Home 
      //  cart={cart} setCart={setCart} 
       />}/>
      <Route path='/cart' element={<Cart 
      //  cart={cart} setCart={setCart} 
       />}/>
      </Routes>
      
    </BrowserRouter>

  );
}

export default App;
