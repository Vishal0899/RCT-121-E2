import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './Dashboard'
import { Home } from './Home'
import { RegisterPageOne } from './RegisterPageOne'
import { RegisterPageTwo } from './RegisterPageTwo'

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}>Home</Route>
      <Route path='/dashboard' element={<Dashboard/>}>Dashboard</Route>
      <Route path='/register/one' element={<RegisterPageOne/>}>RegisterPageOne</Route>
      <Route path='/register/two' element={<RegisterPageTwo/>}>RegisterPageTwo</Route>
    </Routes>
  )
}
