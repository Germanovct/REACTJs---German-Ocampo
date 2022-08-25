
import './App.css';
import cart from './assets/img/cart.png'
import { Discos } from './components/ejemplo';
import {Nav} from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextLinkExample from './components/navbar';










const App = () => {


  return (
          <div>
           <TextLinkExample>
           
           </TextLinkExample>

           <img src= {cart} width="30px" className="Cart justify-content-end" ></img>
          </div>

  );
}

export default App;
