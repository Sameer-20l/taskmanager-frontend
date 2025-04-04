import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../../utils/ApiService"
import LoadToaster from "../../components/Toaster";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const request_payload={
        email : email,
        password : password
    }
    await ApiService.post('auth/login',request_payload,false).then((response)=>{
       
        if(response.status){
          if(response.results.role === 'admin'){
            navigate("/admin/adminHome");
          }
          else if(response.results.role === 'recruiter'){
            navigate('/recruiter/recruiterHome');
          }
          else if(response.results.role === 'student'){
            navigate('/applicant/applicantHome');
          }
        LoadToaster(response.message,"success");
        localStorage.setItem("token",response.results.access_token);
        localStorage.setItem("role",response.results.role);
        }else{
        LoadToaster(response.message,"failure"); 
        }
    }).catch((error)=>{
        console.log(error);
        LoadToaster(error,"failure");
    });
    
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: "25rem" }}>
        <h2 className="text-center mb-3">Login</h2>
       
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <p className="mt-3 text-center">
          Don't have an account? <a href="/register" className="text-success">Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
