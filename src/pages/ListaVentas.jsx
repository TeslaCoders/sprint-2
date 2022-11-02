import React from 'react'

const ListaVentas = () => {
  return (
    <div className='contenedor-tabla'>
        <table class="default">

            <tr>

            <th>Fecha</th>

            <th>Id venta</th>

            <th>Valor</th>

            </tr>

            <tr>

            <td>27/09/2022</td>

            <td>123</td>

            <td>139.900</td>

            </tr>

            <tr>

            <td>27/09/2022</td>

            <td>345</td>

            <td>139.900</td>

            </tr>

            <tr>

            <td>27/09/2022</td>

            <td>678</td>

            <td>139.900</td>

            </tr>

        </table>
                
    </div>
  )
}

export default ListaVentas
