import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, TextField, Button, Box, Link } from '@mui/material';
import reviews from '../src/data/reviews';
import { pink, purple } from '@mui/material/colors';

function CourseName({ courseId, courseName }) {
  return (
    <Typography variant="h6" component="div">
      Course: {courseId} - {courseName}
    </Typography>
  );
}

function ExpandableCard({ review }) {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        border: '1px solid rgba(0, 0, 0, 0.12)',
        boxShadow: 'none',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardContent>
        <CourseName courseId={review.courseId} courseName={review.courseName} />
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '0.5rem' }}>
          Submitted by: {review.submittedBy}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '0.5rem' }}>
          Instructor: {review.instructor}
        </Typography>
        {expanded && (
          <>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '0.5rem' }}>
              Average Rating: {review.averageRating}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '0.5rem' }}>
              Grading Pattern: {review.gradingPattern}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '0.5rem' }}>
              Workload: {review.workload}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '0.5rem' }}>
              Difficulty: {review.difficulty}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '0.5rem' }}>
              Teaching Style: {review.teachingStyle}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '0.5rem' }}>
              Satisfaction: {review.satisfaction}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '0.5rem' }}>
              Comments: {review.comments}
            </Typography>
          </>
        )}
      </CardContent>
      <Box display="flex" justifyContent="flex-end" alignItems="center" p={2}>
        <Button variant="outlined" onClick={handleToggleExpansion} style={{ color: pink[500], borderColor: pink[500] }}>
          {expanded ? 'Collapse' : 'View Details'}
        </Button>
      </Box>
    </Card>
  );
}

function ReviewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredReviews, setFilteredReviews] = useState(reviews);

  const handleSearch = () => {
    const filtered = reviews.filter(
      (review) =>
        review.courseId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredReviews(filtered);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const resetSearch = () => {
    setFilteredReviews(reviews);
    setSearchTerm('');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <Typography variant="h4" gutterBottom >
        Reviews
      </Typography>
      <Box display="flex" alignItems="center" marginBottom="1rem">
        <TextField
          label="Search by Course Name or ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress} 
          style={{ marginRight: '0.5rem' }}
        />
        <Button variant="contained" onClick={handleSearch} style={{ marginRight: '0.5rem', backgroundColor: pink[500] }}>
          Search
        </Button>
        <Button variant="contained" onClick={resetSearch} style={{ backgroundColor: pink[500] }}>
          Reset
        </Button>
        <Button
                  variant="outlined"
                  component="a"
                  href="/submitreview"
                  sx={{ marginLeft: 'auto' }}
                  style={{ color: pink[500], borderColor: pink[500] }}
        >
          Submit Reviews
        </Button>
      </Box>
      <Grid container spacing={2}>
        {filteredReviews.map((review) => (
          <Grid item key={review.id} xs={12}>
            <ExpandableCard review={review} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ReviewsPage;
