import React, { useState } from 'react';
import { Typography, TextField, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';
import { pink, purple } from '@mui/material/colors';

const StyledForm = styled('form')({
  display: 'grid',
  gap: '1rem',
});

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Details:', { email, password });
    setEmail('');
    setPassword('');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <Typography variant="h4">Login</Typography>
      <StyledForm onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              fullWidth
              required
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" style={{ backgroundColor: pink[500], color: 'white'}}>
          Login
        </Button>
        <Typography variant="body2">
          Don't have an account?{' '}
          <Link href="/signup">
            <Button style={{ backgroundColor: pink[500], color: 'white'}}>Signup</Button>
          </Link>
        </Typography>
      </StyledForm>
    </div>
  );
}

export default LoginPage;
