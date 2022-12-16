import React from 'react'
import Image from 'react-bootstrap/Image'
import Background from '../media/hearts.jpg'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Home: React.FC = () => {
  const renderTooltip = (props:any) => (
    <Tooltip id="button-tooltip" {...props}>
      Yum Yum
    </Tooltip>
  )

  return (
    <div className='Home'>
      <Image fluid={true} src={Background} alt="heart shape candy by Pexel.com"/>
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

export default Home;