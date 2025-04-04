import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/public/LoginPage";
import RegisterPage from "./pages/public/RegisterPage";
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './components/PrivateRoute'
import AdminRouting from "./routes/AdminRouting";
import ApplicantRouting from "./routes/ApplicantRouting";
import RecuiterRouting from "./routes/RecuiterRouting";

function App() {
  return (
    <>
    <Toaster position="top-right" reverseOrder={false} toastOptions={{
    className: '',
    style: {
      border: '1px solid #713200',
      padding: '16px',
      color: '#713200',
      width: '250px',
      marginTop: '15px'
    }
  }} />

      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/admin/*" element={<AdminRouting />} />
          <Route path="/applicant/*" element={<ApplicantRouting />} />
          <Route path="/recruiter/*" element={<RecuiterRouting />} />
        </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
