import React from 'react'
import { Button} from 'react-bootstrap';
import { Props as IProps} from './StoreItems';
import { useShoppingCart } from '../context/ShoppingCartContext'

const InnerCard: React.FC<IProps> = ({id}) => {

    const {getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
       } = useShoppingCart()

       const quantity = getItemQuantity(id)
  return (
    <div className='mt-auto'>
    {quantity === 0 ?
    (<Button onClick={() => increaseCartQuantity(id)} className='w-100' variant='warning'>+ Add To Card</Button> ): 
    <div 
       className='d-flex align-items-center flex-column'
       style={{gap: ".5rem"}}>
        <div 
          className='d-flex align-items-center flex-row'
          style={{gap: ".5rem"}}>
          <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
          <div>
          <span className='fs-3'>{quantity}</span> in cart
          </div>
          <Button onClick={() => increaseCartQuantity(id)}>+</Button>
          
        </div>
        <Button onClick={() => removeFromCart(id)} variant='danger' size='sm'>Remove</Button>
    </div>}
</div>
  )

}

export default InnerCard;