import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import HomeContainer from './components/HomeContainer'
import AdminContainer from './components/AdminContainer'
import { ADMIN, HOME } from './constants/Pathnames'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={HOME} element={<HomeContainer/>} />
          <Route path={ADMIN} exact element={<AdminContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router