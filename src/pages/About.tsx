import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Accordion from 'react-bootstrap/Accordion';

const About: React.FC = () => {
  const renderTooltip = (props:any) => (
    <Tooltip id="button-tooltip" {...props} >
      Contact Us
    </Tooltip>
  )

  return (
     <div className='About'>
      <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
      >
      <span className='Logo'>CandyHeaven</span>
      </OverlayTrigger>
      <Accordion defaultActiveKey="0" style={{fontSize: "1.2rem"}}>
          <Accordion.Item eventKey="0" style={{fontSize: "1.2rem", background: "#8214cc", color: "white"}}>
              <Accordion.Header><span className='ContactUs'>Contact us</span></Accordion.Header>
              <Accordion.Body>
                We love to hear from you. Get in touch.
              </Accordion.Body>
          </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default About;