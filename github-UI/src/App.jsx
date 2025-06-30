import { useState, useEffect } from 'react'
import './App.css'
import { Repos, Home, Star,  UserInput } from './components'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from 'react-router-dom'
function App () {
  const { username } = useParams()
  console.log(username)

  return (
    <>
      <Router>
        <Routes>
          {/* Main Entry */}
          <Route path='/' element={<UserInput />} />

          {/* Profile Page & Nested Routes */}
          <Route path='/profile/:username' element={<Home />}>
            {/* Nested Children inside Home using <Outlet /> */}
            <Route index element={<Repos />} />
            <Route path='star' element={<Star />} />
          </Route>
          {/* Overview Page */}
        </Routes>
      </Router>
    </>
  )
}

export default App
