import React, { ReactElement } from 'react'
import icon from 'img/safe.png'
import { Outlet } from 'react-router-dom'
import './index.less'

interface IProps {
  name?: string;
  children?: React.ReactNode
}
const Entrance = (props: IProps): ReactElement => {
  console.log('props', props)
  return (
    <div className='main-container-wrapper'>
      <div className='main-container'>
        <div className='menu-bar'>menu-bar</div>
        <div className='balance-area'></div>
        <div className='tabs'></div>
      </div>
      <Outlet />
    </div>
  )
} 
export default Entrance