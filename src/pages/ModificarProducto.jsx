import React from 'react'
import imagen from '../images/85cae0c9-6f71-4803-9668-e630e0cd16f0.jpg'
import '../assets/css/modificarProducto.css'
import Cards from '../components/Cards'

const ModificarProducto = () => {
  return (
    <main>
        <div className="contenedor">
            <div className='sidebar'>  
            
                <h2>Lista de Productos</h2>
                <a className='style-a' href=''>PRODUCTO 1 </a>
                <a className='style-a' href=''>PRODUCTO 2 </a>
                <a className='style-a' href=''>PRODUCTO 3 </a>
                <a className='style-a' href=''>PRODUCTO 4 </a>
            </div>

            <div className='mostrar-productos'>
                <h2>PRODUCTO 1</h2>
                <Cards/>
                
            </div>
        </div>
    </main>

  )
}

export default ModificarProducto