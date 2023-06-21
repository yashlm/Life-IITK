import React from 'react';
import { Container, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#f5f5f5', padding: '1rem' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" align="center" color="textSecondary">
          &copy; {new Date().getFullYear()} Life @IITK. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary">
          Made as a PClub recruitment task by <Link href="https://yashlm.github.io">Yash Chauhan</Link>
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
