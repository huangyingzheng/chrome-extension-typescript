import React, { ReactElement } from 'react'
import { Button } from 'antd';
import './index.less'
import icon from 'img/safe.png';

const Index = (): ReactElement => {
  return (
    <div id='container'>
      <header>
        <div className='flex-wrapper'>
          <img src={icon} alt="icon" className='icon' />
          <div></div>
        </div>
      </header>
      <div></div>
    </div>
  )
}
export default Index