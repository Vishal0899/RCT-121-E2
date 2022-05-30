import React from 'react'
import { Link } from 'react-router-dom'
import { AllRoutes } from './AllRoutes'

export const Dashboard = () => {
  return (
    <div>
      <Link style={{marginRight:"10px"}} to="/">Home</Link>
      <Link style={{marginRight:"10px"}} to="/dashboard">Dashboard</Link>
      <Link style={{marginRight:"10px"}} to="/register/one">Register</Link>
    </div>
  )
}
