import React from 'react'
import imagen from '../images/85cae0c9-6f71-4803-9668-e630e0cd16f0.jpg'
import imagen2 from '../images/94308581-abff-47d1-aa5a-76d6099a9ef3.jpg'
import imagen3 from '../images/fe7d9408-5651-4a1b-b233-974869ebc7f3.jpg'
import imagen4 from '../images/zapato1.jpg'

import '../assets/css/listaProductos.css'

const ListaDeProductos = () => {
  return (
    <>
    
        <main>
          <div className="container">

            <div  className='card'>
              <img src={imagen} className="card-img-top" alt="..." />
              <p className='p-style'> Sandalia Tacon chin</p>
                <div>
                  <a className='a-style'> $139.900 </a>
                  <a className='a-talla'>Tallas</a>
                </div>
              <div>
                <button className='button-compra'> comprar </button>
                <select className='select'>
                  <option>34</option>
                  <option>35</option>
                  <option>36</option>
                  <option>37</option>
                  <option>38</option>
                  <option>39</option>
                </select>
              </div>
            </div>

            <div  className='card'>
              <img src={imagen2} className="card-img-top" alt="..." />
              <p className='p-style'> Sandalia Tacon chin</p>
                <div>
                  <a className='a-style'> $139.900 </a>
                  <a className='a-talla'>Tallas</a>
                </div>
              <div>
                <button className='button-compra'> comprar </button>
                <select className='select'>
                  <option>34</option>
                  <option>35</option>
                  <option>36</option>
                  <option>37</option>
                  <option>38</option>
                  <option>39</option>
                </select>
              </div>
            </div>

            <div  className='card'>
              <img src={imagen3} className="card-img-top" alt="..." />
              <p className='p-style'> Sandalia Tacon chin</p>
                <div>
                  <a className='a-style'> $139.900 </a>
                  <a className='a-talla'>Tallas</a>
                </div>
              <div>
                <button className='button-compra'> comprar </button>
                <select className='select'>
                  <option>34</option>
                  <option>35</option>
                  <option>36</option>
                  <option>37</option>
                  <option>38</option>
                  <option>39</option>
                </select>
              </div>
            </div>

            <div  className='card'>
              <img src={imagen4} className="card-img-top" alt="..." />
              <p className='p-style'> Sandalia Tacon chin</p>
                <div>
                  <a className='a-style'> $139.900 </a>
                  <a className='a-talla'>Tallas</a>
                </div>
              <div>
                <button className='button-compra'> comprar </button>
                <select className='select'>
                  <option>34</option>
                  <option>35</option>
                  <option>36</option>
                  <option>37</option>
                  <option>38</option>
                  <option>39</option>
                </select>
              </div>
            </div>

          </div>

          
        </main>
      
    </> 
      
  )
}

export default ListaDeProductos

