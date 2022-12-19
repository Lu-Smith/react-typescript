import React from 'react';
import Image from 'react-bootstrap/Image';
import Background from '../media/heart.jpg';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Home = () => {
  const renderTooltip = (props:any) => (
    <Tooltip id="button-tooltip" {...props}>
      Yum Yum
    </Tooltip>
  )

  return (
    <div className='Home'>
      <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
      >
      <span className='Logo'>CandyHeaven</span>
      </OverlayTrigger>
      <Image fluid src={Background} alt="heart shape candy by Pexel.com"/>
    </div>
  )
}

export default Home;