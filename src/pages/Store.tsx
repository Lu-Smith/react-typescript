import React from 'react';
import storeItems from "../data/items.json";
import {Row, Col} from "react-bootstrap";
import StoreItems from '../components/StoreItems';
import Footer from '../components/Footer';

const Store: React.FC = () => {
  return (
    <div className='Store'>
      <h1>CandyHeaven</h1>  
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}><StoreItems {...item} /></Col>
        ))}
        
      </Row>
      <Footer />
    </div>
    
  )
}

export default Store;