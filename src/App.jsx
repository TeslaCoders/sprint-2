
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// styles
import '../src/assets/css/normalize.css';
import '../src/assets/css/styles.css';


// Layout
import Layout from './Layout/layout';

// Components
import ListaDeProductos from './pages/ListaDeProductos';
import ModificarProducto from './pages/ModificarProducto';
import ListaVentas from './pages/ListaVentas';


function App() {
  return (
      <BrowserRouter>
        <Routes>
        {/* Rutas Publicas*/}
          <Route path='/' element={<Layout/>}>
            <Route path='lista-productos' element={<ListaDeProductos />}/>
            <Route path='modificar-productos' element={<ModificarProducto />}/>
            <Route path='lista-ventas' element={<ListaVentas/>}/>
        
          </Route>

        </Routes>
      </BrowserRouter>
    
    
  )
  
}

export default App
