import React from 'react'
import { Button} from 'react-bootstrap';

const InnerCard: React.FC = () => {

    const quantity = 0; 

  return (
    <div className='mt-auto'>
    {quantity === 0 ?
    (<Button className='w-100' variant='warning'>+ Add To Card</Button> ): 
    <div 
       className='d-flex align-items-center flex-column'
       style={{gap: ".5rem"}}>
        <div 
          className='d-flex align-items-center flex-row'
          style={{gap: ".5rem"}}>
          <Button>-</Button>
          <div>
          <span className='fs-3'>{quantity}</span> in cart
          </div>
          <Button>+</Button>
          
        </div>
        <Button variant='danger' size='sm'>Remove</Button>
    </div>}
</div>
  )
}

export default InnerCard;