import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {
    FaInstagram,
    FaLinkedin,
    FaFacebook,
    FaTwitter,
    FaYoutube,
  } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className='Footer'>
         <CardGroup>
      <Card>
        
        <Card.Body>
          <Card.Title>Twitter</Card.Title>
          <Card.Text>
            Connect with us on our awesome Twitter account. Let sweetness stay with you.
          </Card.Text>
        </Card.Body>
        <Card.Footer className='Icons'>
        <FaTwitter />
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Facebook</Card.Title>
          <Card.Text>
            Daily update of candy life{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer className='Icons'>
        <FaFacebook />
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>LinkedIn</Card.Title>
          <Card.Text>
            Share with us you sweet posts. Lets make the sweeter world together.
          </Card.Text>
        </Card.Body>
        <Card.Footer className='Icons'>
           <FaLinkedin />
        </Card.Footer>
      </Card>
    </CardGroup>

    </div>
  )
}

export default Footer