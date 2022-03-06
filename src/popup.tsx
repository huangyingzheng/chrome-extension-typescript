import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Routes, HashRouter as Router} from 'react-router-dom'
import App from './app'
import Swaps from './swaps'
// import './index.less'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='swaps/' element={<Swaps />} />
    </Routes>
  </Router>,
  document.querySelector('#root')
)