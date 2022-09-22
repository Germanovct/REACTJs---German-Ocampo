
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Contador from './components/Counter';
import ItenListContainer from './components/itenListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';
import Error404 from './components/Error404/Error404';
import Home from './components/Home/Home';
import { MenuUnstyledContext } from '@mui/base';
import { CartContext } from './components/Context/CartContext';
import { useState } from 'react';
import Cart from './components/Cart/Cart';




const App = () => {

  const [cart, setCart] = useState ([])

  const addToCart = (producto) =>{
    setCart([...cart, producto])

  }

  const isInCart = (id) =>{
    return cart.some((producto) => producto.id ===id)
  }

  const cartQuantity =() =>{
      return cart.reduce((acc, producto)=> acc + producto.cantidad, 0)

  }

  return (
    <CartContext.Provider value={ {
      cart,
     addToCart,
     isInCart,
     cartQuantity
    } }>
    
     <BrowserRouter>
            <Navbar/>
            { /* <Contador/> */ }

            <Routes>
              <Route path='/' element={ <Home/> }/>
              <Route path='/productos/:categoryId' element={ <ItenListContainer/> }/>
              <Route path='/Cart' element = {<Cart/>} />

              <Route path='/nosotros' element={ <Nosotros/> }/>
              <Route path='/contacto' element={ <Contacto/> }/>
              <Route path='*' element={ <Error404/> } />
            

            </Routes>


              
              



    </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
