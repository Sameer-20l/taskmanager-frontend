import React from 'react'
import { Routes, Route } from "react-router-dom";
import AdminDashboard from '../pages/admin/AdminDashboard'

const AdminRouting = () => {
  return (
   
        <Routes>
            <Route path='/adminHome' element={<AdminDashboard />}/>
        </Routes>
  
  )
}

export default AdminRouting
