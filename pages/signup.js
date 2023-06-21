import React, { useState } from 'react';
import { Typography, TextField, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { pink, purple } from '@mui/material/colors';

const StyledForm = styled('form')({
  display: 'grid',
  gap: '1rem',
});

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup Details:', { name, email, password });
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <Typography variant="h4">Signup</Typography>
      <StyledForm onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
            />
          </Grid>
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
        <Button type="submit" variant="contained" style={{ backgroundColor: pink[500], color: 'white' }}>
          Signup
        </Button>
      </StyledForm>
    </div>
  );
}

export default SignupPage;
