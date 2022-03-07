import React, { ReactElement, Suspense, LazyExoticComponent, FC as FunctionalComponent, lazy } from 'react'
import { Route, Routes, HashRouter as Router} from 'react-router-dom'
// import { Button } from 'antd';
import './index.less'
import routes from 'Src/routes'
// import icon from 'img/safe.png';
import SuspenseFallback from './suspenseFallback';

const Index = (): ReactElement => {
  return (
    <div className='app'>
      <div className='app-header'></div>
      {/* <Suspense fallback={<SuspenseFallback />}> */}
        <Router>
          <Routes>
            {routes.map((route, i) => {
              return <Route path={route.path} element={ route.element } key={i}/>
            })}
          </Routes>
        </Router>
      {/* </Suspense> */}
    </div>
  )
}
export default Index