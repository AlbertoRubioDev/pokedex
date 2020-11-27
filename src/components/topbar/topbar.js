import React from "react";
import {
  Link,
  useHistory,
  useLocation
} from "react-router-dom";
import { NavBar, Icon } from 'antd-mobile';
import { Popover } from 'antd';



export default function Topbar() {
  
  const history = useHistory();
  const location = useLocation();


  const goToPreviousPath = () => {
      history.goBack()
  }

  const content = (
    <div>
      <p><Link onClick={() => history.push('/')}>Home</Link></p>
      <p> <Link onClick={() => history.push('/list')}>Pokedex</Link></p>
    </div>
  );

  return (
        <NavBar
      className={ location.pathname.includes('pokemon') ? 'white-text' : 'black-text' }
      style={{position: 'absolute', width: '100%', backgroundColor: 'unset', marginTop: '4.5rem'}}
      icon={<Icon type="left" />}
      onLeftClick={goToPreviousPath}
      rightContent={[
        <Popover placement="bottomRight" content={content} trigger="click">
            <Icon key="1" type="ellipsis" />
            {
              location.pathname.includes('pokemon') ? null : <img src="/static/media/ball.4ffa1b14.png" alt='nav' className='nav-img'/>
            }
        </Popover>
      ]}
    >
    </NavBar>
  );
}