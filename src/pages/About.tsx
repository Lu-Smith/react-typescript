import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const About: React.FC = () => {
  const renderTooltip = (props:any) => (
    <Tooltip id="button-tooltip" {...props}>
      Yum Yum
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
    </div>
  )
}

export default About;