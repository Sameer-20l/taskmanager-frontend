import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../../utils/ApiService";
import LoadToaster from "../../components/Toaster";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("applicant"); // default role
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const register_payload = { name, email, password, role };

    try {
      const response = await ApiService.post("auth/register", register_payload, false);
      if (response.status) {
        LoadToaster(response.message, "success");
        navigate("/");
      } else {
        LoadToaster(response.message, "failure");
      }
    } catch (error) {
      LoadToaster("Registration failed. Please try again.", "failure");
      console.error(error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: "25rem" }}>
        <h2 className="text-center mb-3">Register</h2>
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
            {errors.name && <p className="text-danger small">{errors.name}</p>}
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
            {errors.email && <p className="text-danger small">{errors.email}</p>}
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
            {errors.password && <p className="text-danger small">{errors.password}</p>}
          </div>

          <div className="mb-3">
            <label className="form-label">Select Role</label>
            <select
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="student">Applicant</option>
              <option value="recruiter">Recruiter</option>
            </select>
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
