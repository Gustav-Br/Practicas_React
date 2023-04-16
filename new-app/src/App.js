import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Contador from './Contador';
import Home from './Home';
import NotFound from './NotFound';
import Formulario from './Formulario';

function App() {
  return (
    <div className="App">
            
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/contador">Contador</Link></li>
          <li><Link to="/registro">Registro</Link></li>
        </ul>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contador' element={<Contador />} />
          <Route path='/registro' element={<Formulario />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      
    </div>
  );
}

export default App;
