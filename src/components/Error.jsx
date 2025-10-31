import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h2>NO EXISTE ESA PÁGINA</h2>
      <Link className='btn btn-primary' to='/'>Volver a la página principal</Link>
    </div>
  )
}

export default Error