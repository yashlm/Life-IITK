import React from 'react';
import { Container, Typography, Button, Card, CardContent, Grid, ThemeProvider } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';
import { createTheme } from '@mui/material/styles';
import { pink, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: pink[500],
    },
    secondary: {
      main: purple[500],
    },
  },
});

const OverviewSection = styled('section')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: '4rem 2rem',
  textAlign: 'center',
}));

const SectionHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  marginBottom: '2rem',
}));

function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <OverviewSection>
          <Container maxWidth="md">
            <Typography variant="h4" component="h1" sx={{ marginBottom: '1rem' }}>
              Welcome to Life @IITK
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 'rem' }}>
              Life @IITK is a platform designed to assist students in finding and sharing valuable resources and reviews
              for their courses. Enhance your learning experience with curated course materials, insights from reviews, and
              contribute to the academic community by sharing your own resources and feedback.
            </Typography>
          </Container>
        </OverviewSection>

        <section>
          <Container maxWidth="md" sx={{ textAlign: 'center', paddingTop: '1rem', paddingBottom: '2rem' }}>
            <SectionHeading variant="h4" component="h2" sx={{ marginBottom: '2rem' }}>
              Explore Course Helper
            </SectionHeading>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" component="div" sx={{ marginBottom: '1.5rem' }}>
                      Resources
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Access and share course materials, lecture notes, assignments, and more.
                    </Typography>
                  </CardContent>
                  <Link href="/resources" passHref>
                    <Button variant="contained" color="primary">
                      View Resources
                    </Button>
                  </Link>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" component="div" sx={{ marginBottom: '1.5rem' }}>
                      Reviews
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Read and write reviews for courses, providing insights on grading patterns, workload, teaching style, and more.
                    </Typography>
                  </CardContent>
                  <Link href="/reviews" passHref>
                    <Button variant="contained" color="primary">
                      View Reviews
                    </Button>
                  </Link>
                </Card>
              </Grid>
              {/* Add more cards for other app functionality */}
            </Grid>
          </Container>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default HomePage;
