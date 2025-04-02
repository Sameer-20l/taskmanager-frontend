import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import { Toaster } from 'react-hot-toast';



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
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
