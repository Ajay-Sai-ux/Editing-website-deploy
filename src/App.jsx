import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'


const App = () => {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App