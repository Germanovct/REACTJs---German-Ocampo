
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





const App = () => {


  return (
    
    <BrowserRouter>
            <Navbar/>
            { /* <Contador/> */ }

            <Routes>
              <Route path='/' element={ <Home/> }/>
              <Route path='/productos/:categoryId' element={ <ItenListContainer/> }/>

              <Route path='/nosotros' element={ <Nosotros/> }/>
              <Route path='/contacto' element={ <Contacto/> }/>
              <Route path='*' element={ <Error404/> } />
            

            </Routes>


              
              



    </BrowserRouter>

  );
}

export default App;
