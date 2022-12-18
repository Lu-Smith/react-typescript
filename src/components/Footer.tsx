import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {
    FaInstagram,
    FaLinkedin,
    FaFacebook,
    FaTwitter
  } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className='Footer'>
         <CardGroup>
      <Card>
        <Card.Body style={{textAlign: "center"}}>
            <a href="//twitter.com/LunaSmithArt"
                    target="_blank"
                    aria-label="Instagram"
                    rel="noreferrer"
                    className='link'>
                <Card.Title>Twitter</Card.Title>
                <Card.Text>
                    Connect with us on our awesome Twitter account. Let sweetness stay with you.
                </Card.Text>
            </a>
        </Card.Body>
        <Card.Footer className='Icons'>
             <a href="//twitter.com/LunaSmithArt"
                    target="_blank"
                    aria-label="Instagram"
                    rel="noreferrer"
                    className='link'>
                <FaTwitter />
             </a>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body style={{textAlign: "center"}}>
            <a  href="//www.facebook.com/lunasmithart"
                    target="_blank"
                    aria-label="Instagram"
                    rel="noreferrer"
                    className='link'>
                <Card.Title>Facebook</Card.Title>
                <Card.Text>
                    Daily update of candy life{' '}
                </Card.Text>
            </a>
        </Card.Body>
        <Card.Footer className='Icons'>
            <a href="//www.facebook.com/lunasmithart"
                    target="_blank"
                    aria-label="Instagram"
                    rel="noreferrer"
                    className='link'>
                <FaFacebook />
            </a>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body style={{textAlign: "center"}}>
            <a href="//www.linkedin.com/in/luna-smith/"
                    target="_blank"
                    aria-label="Instagram"
                    rel="noreferrer"
                    className='link'>
                <Card.Title>LinkedIn</Card.Title>
                <Card.Text>
                    Share with us you sweet posts. Lets make the sweeter world together.
                </Card.Text>
            </a>
        </Card.Body>
        <Card.Footer className='Icons'>
             <a href="//www.linkedin.com/in/luna-smith/"
                    target="_blank"
                    aria-label="Instagram"
                    rel="noreferrer"
                    className='link'>
                <FaLinkedin />
             </a>
        </Card.Footer>
      </Card>
      <Card >
         <Card.Body style={{textAlign: "center"}}>
            <a href="//www.instagram.com/lunasmithart/"
                target="_blank"
                aria-label="Instagram"
                rel="noreferrer"
                className='link'>
                <Card.Title>Instagram</Card.Title>
                <Card.Text>
                    Daily new photos with delicious treats.
                </Card.Text>
             </a>
        </Card.Body>
        <Card.Footer className='Icons'>
            <a href="//www.instagram.com/lunasmithart/"
                target="_blank"
                aria-label="Instagram"
                rel="noreferrer"
                className='link'>
              <FaInstagram />
            </a>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  )
}

export default Footer