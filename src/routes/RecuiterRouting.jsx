import React from 'react';
import RecruiterDashboard from '../pages/recruiter/RecruiterDashboard';
import { Routes, Route } from "react-router-dom";

const RecuiterRouting = () => {
  return (
    <Routes>
        <Route path='/recruiterHome' element={<RecruiterDashboard/>}/>
    </Routes>
  )
}

export default RecuiterRouting
