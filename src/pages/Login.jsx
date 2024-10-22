import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // To manage loading state
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }
    setError('');
    setLoading(true); // Start loading

    try {
      const response = await axios.post('http://localhost:4000/admin/login', {
        email: email,
        password: password,
      });

      console.log('Login Response:', response.data);
      if (response.data.status) {
        setSuccessMessage('Login Successful!');
        setLoading(false); // Stop loading
        navigate('/dashboard'); // Navigate to "/about" on success
      } else {
        setError(response.data.message || 'Login failed');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Login failed, please try again');
      setLoading(false); // Stop loading
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Typography component="h1" variant="h5" align="center" gutterBottom>
          Admin Login
        </Typography>
        <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
          {successMessage && (
            <Typography color="primary" variant="body2">
              {successMessage}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading} // Disable button while loading
          >
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
