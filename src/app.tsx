import React, { ReactElement } from 'react'
import { Button } from 'antd';
import './index.less'
import icon from 'img/safe.png';

const Index = (): ReactElement => {
  return (
    <div className='app'>
      <div className='app-header'></div>
      <div className='main-container-wrapper'>
        <div className='main-container'>
          <div className='menu-bar'></div>
          <div className='balance-area'></div>
          <div className='tabs'></div>
        </div>
      </div>
    </div>
  )
}
export default Index