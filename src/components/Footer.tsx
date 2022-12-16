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
            <a  href="//twitter.com/LunaSmithArt"
                    target="_blank"
                    aria-label="Instagram">
                <Card.Title>Twitter</Card.Title>
                <Card.Text>
                    Connect with us on our awesome Twitter account. Let sweetness stay with you.
                </Card.Text>
            </a>
        </Card.Body>
        <Card.Footer className='Icons'>
        <FaTwitter />
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
            <a  href="//www.facebook.com/lunasmithart"
                    target="_blank"
                    aria-label="Instagram">
                <Card.Title>Facebook</Card.Title>
                <Card.Text>
                    Daily update of candy life{' '}
                </Card.Text>
            </a>
        </Card.Body>
        <Card.Footer className='Icons'>
        <FaFacebook />
        </Card.Footer>
      </Card>
      
      <Card>
        <Card.Body>
            <a  href="//www.linkedin.com/in/luna-smith/"
                    target="_blank"
                    aria-label="Instagram">
                <Card.Title>LinkedIn</Card.Title>
                <Card.Text>
                    Share with us you sweet posts. Lets make the sweeter world together.
                </Card.Text>
            </a>
        </Card.Body>
        <Card.Footer className='Icons'>
           <FaLinkedin />
        </Card.Footer>
      </Card>
      <Card >
         <Card.Body>
          <a  href="//www.instagram.com/lunasmithart/"
                target="_blank"
                aria-label="Instagram">
                <Card.Title>Instagram</Card.Title>
                <Card.Text>
                    Daily new photos with delicious treats.
                </Card.Text>
          </a>
        </Card.Body>
        <Card.Footer className='Icons'>
           <FaInstagram />
        </Card.Footer>
        
      </Card>
      
    </CardGroup>

    </div>
  )
}

export default Footer