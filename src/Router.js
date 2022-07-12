import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import HomeContainer from './components/HomeContainer'
import AdminContainer from './components/AdminContainer'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<HomeContainer/>} />
          <Route path="/admin" exact element={<AdminContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router