import React from 'react'
import ApplicantDashboard from '../pages/applicant/ApplicantDashboard'
import { Routes, Route } from "react-router-dom";


const ApplicantRouting = () => {
  return (
    <Routes>
        <Route path='/applicantHome' element={<ApplicantDashboard/>}/>
    </Routes>
  )
}

export default ApplicantRouting
