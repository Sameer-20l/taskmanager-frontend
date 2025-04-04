import { jwtDecode } from "jwt-decode";

const JwtDecode = async () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  if (!token) return true;

  const decodedToken = jwtDecode(token);
  
  return decodedToken.exp * 1000 < Date.now() && decodedToken.userRole !== role;
};

export default JwtDecode;
