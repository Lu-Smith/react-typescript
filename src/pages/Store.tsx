import React from 'react';
import storeItems from "../data/items.json";
import {Row, Col} from "react-bootstrap";

const Store: React.FC = () => {
  return (
    <>
      <h1>Store</h1>  
      <Row>
        {storeItems.map(item => (
          <Col>{JSON.stringify(item)}</Col>
        ))}
        
      </Row>
    </>
    
  )
}

export default Store;