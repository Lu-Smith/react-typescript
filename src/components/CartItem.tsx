import { Button, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import storeItems from '../data/items.json';
import { formatCurrency } from '../utilities/formatCurrency';

type CartItemsProps = {
    id: number
    quantity: number
}

const CartItem = ({id, quantity}: CartItemsProps) => {
    const {removeFromCart} = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
      if (item == null) return null
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img src={item.imgUrl} style={{ width: "125px", height: "75px", objectFit: "cover"}} alt="product for sale"/>
        <div className='me-auto'>
            <div>
                {item.name} {quantity > 1 && <span style={{fontSize: ".8rem", color: "#cc8214"}}>x{quantity}</span>}
            </div>
            <div style={{fontSize: ".9rem", color: "#cc8214"}}>{formatCurrency(item.price)}</div>
        </div>
        <div>{formatCurrency(item.price * quantity)}</div>
        <Button variant='outline-danger' size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
    </Stack>
  )
}

export default CartItem;