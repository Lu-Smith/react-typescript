import React from 'react'
import { Card } from 'react-bootstrap';
import {formatCurrency} from '../utilities/formatCurrency';
import InnerCard from './InnerCard';

interface Props {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

const StoreItems: React.FC<Props> = ({id, name, price, imgUrl}) => {

  return (
    <Card className='h-100'>
        <Card.Img 
        variant='top' 
        src={imgUrl} 
        height="200px" 
        style={{ objectFit: "cover"}} />
        <Card.Body
        className='d-flex flex-column'>
            <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                <span className='"fs-2'>{name}</span>
                <span className='"ms-2 text-muted'>{formatCurrency(price)}</span>
            </Card.Title>
            <InnerCard />
        </Card.Body>
    </Card>
  )
}

export default StoreItems;