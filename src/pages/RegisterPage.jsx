import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../utils/ApiService";
import LoadToaster from "../components/Toaster";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const handleRegister = async (e) => {
    e.preventDefault();
    const register_payload = {
        name : name,
        email : email,
        password : password
    }
    await ApiService.post('auth/register',register_payload,false).then((response)=>{
    if(response.status){
        navigate('/');
        LoadToaster(response.message,"success");
    }
    else{
        LoadToaster(response.message,"failure"); 
    }
    }).catch((error)=>{
        LoadToaster(response.message,"failure"); 
        console.log(error);
    })
  
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: "25rem" }}>
        <h2 className="text-center mb-3">Register</h2>
        {error && <p className="text-danger text-center">{error}</p>}
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
          <button type="submit" className="btn btn-success w-100">
            Register
          </button>
        </form>
        <p className="mt-3 text-center">
          Already have an account? <a href="/" className="text-primary">Login</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
