import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  // State to store the form data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [role, setRole] = useState('admin'); // State to track the selected role
  const navigate = useNavigate(); // Hook for navigation

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Please fill in all fields.');
      return;
    }
    
    // Add custom logic here for handling different roles' login if needed
    console.log(`${role} login submitted`);
  };

  // Handle the change in email and password inputs
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Handle role change (User, Admin, Staff)
  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);

    // Navigate based on selected role
    if (selectedRole === 'user') {
      navigate('/login');
    } else if (selectedRole === 'admin') {
      navigate('/admin-login');
    } else if (selectedRole === 'staff') {
      navigate('/staff-login');
    }
  };

  return (
    <>
      <div className="text-center d-flex justify-content-center">
        <div className="login-form text-center mt-5">
          <h2>{role.charAt(0).toUpperCase() + role.slice(1)} Login</h2>

          {error && <div className="error-message">{error}</div>}

          {/* Role Selection Radio Buttons */}
          <div className="role-selection">
            <label>
              <input
                type="radio"
                name="role"
                value="user"
                checked={role === 'user'}
                onChange={handleRoleChange}
              />
              User Login
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="admin"
                checked={role === 'admin'}
                onChange={handleRoleChange}
              />
              Admin Login
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="staff"
                checked={role === 'staff'}
                onChange={handleRoleChange}
              />
              Staff Login
            </label>
          </div>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="input-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link> <br />
            <Link className="mt-3" to="/signup">
              I don't have an Account 🤦‍♂️
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
