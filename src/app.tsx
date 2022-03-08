import React, { ReactElement } from 'react'
import { useRoutes } from 'react-router-dom'
// import { Button } from 'antd';
import './index.less'
import routes from 'Src/routes'
import icon from 'img/safe.png';

const Index = (): ReactElement => {
  let element = useRoutes(routes);
  return (
    <div className='app'>
      <div className='app-header'>
        <img src={icon} alt="" />
        <div className='tooltips'>
          <div className='tooltips-network'>
            <i></i>主网络
          </div>
        </div>
      </div>
      {element}
      <div className='app-footer'>
        需要帮助？请联系
        <a>XXX支持</a>
      </div>
    </div>
  )
}
export default Index