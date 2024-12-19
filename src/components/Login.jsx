import React, { useState } from 'react';

import { Container, Box, Typography, TextField, Button, Link, colors } from '@mui/material';
import Grid from '@mui/material/Grid';
import imgLogin from '../assets/imageLogin.png'
import logo from '../assets/logo.png'

import { useNavigate } from 'react-router-dom';

import { login } from '../services/authService';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate('/booking');
    } catch (error) {
      setError('Credenciales incorrectas');
    }
  };



  return (
    <Grid
      container
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* Left side - Login Form */}
      <Grid item xs={12} md={5}>
        <Container
          className='container-form-login'
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            alignItems: 'center',
            padding: '0 70px',
          }}
        >
          <Grid>
            <img src={logo} sx={{ with: '10%' }} />
          </Grid>
          <Typography variant="h6"
            gutterBottom
            sx={{
              color: 'rgba(0,0,0,.7)',
              width: '100%',
              borderBottom: '1px solid rgba(0,0,0,.2)'
            }}
          >
            Login into Reservations
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Email address"
              type="text"
              variant="outlined"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Button
              type='submit'
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              style={{ marginTop: '20px', background: 'rgb(255, 87, 34)' }}
            >
              SIGN IN
            </Button>
          </form>
        </Container>
        <Box>
          <Box display="flex" justifyContent="center" marginTop="20px">
            <Typography variant="body2">
              Do you have an account?{' '}
              <Link href="register/"
                color="primary"
                style={{
                  color:
                    'rgb(255, 87, 34)',
                  textDecoration: 'none'
                }}>
                Sing up
              </Link>
            </Typography>
          </Box>

          <Box>
            <Typography variant="body2"
              align="center"
              color="textSecondary"

            >
              ©2024 Reservations - By Dev. Project
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* Right side - Image */}
      <Grid item xs={false} md={7}>
        <Box
          style={{
            backgroundImage: `url(${imgLogin})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Login;