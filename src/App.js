
import './App.css';
import { Discos } from './components/ejemplo';
import {Nav} from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Contador from './components/Counter';
import ItenListContainer from './components/itenListContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'








const App = () => {


  return (
          <div>
            <Navbar/>
            <Contador/>
            <FontAwesomeIcon icon={regular('coffee')} />

            <ItenListContainer/>
          </div>

  );
}

export default App;
