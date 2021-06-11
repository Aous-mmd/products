import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss'


const App = () => {
  return (
    <div className='app'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='product'>
              <div className='price'></div>
              <div className='triangle'></div>
              <div className='sold'></div>
              <div className='lists'></div>
              <div className='counter'></div>
              <div className='toolbar'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
