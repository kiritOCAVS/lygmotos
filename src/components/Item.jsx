import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Item = ({prod}) => {
  return (
    <Card style={{ width: '18rem', margin: '10px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Card.Img 
        variant="top" 
        src={prod.img} 
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body style={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
        <Card.Title style={{ minHeight: '60px' }}>{prod.name}</Card.Title>
        <Card.Text style={{ marginTop: 'auto' }}>
          ${prod.price}
        </Card.Text>
        <Link className='btn btn-primary mt-2' to={`/item/${prod.id}`}>Ver Más</Link>
      </Card.Body>
    </Card>
  )
}

export default Item