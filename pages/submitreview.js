import React, { useState } from 'react';
import { Typography, TextField, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { pink, purple } from '@mui/material/colors';

const StyledForm = styled('form')({
  display: 'grid',
  gap: '1rem',
});

function SubmitReviewPage() {
  const [courseId, setCourseId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [instructor, setInstructor] = useState('');
  const [averageRating, setAverageRating] = useState('');
  const [gradingPattern, setGradingPattern] = useState('');
  const [workload, setWorkload] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [teachingStyle, setTeachingStyle] = useState('');
  const [satisfaction, setSatisfaction] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Review:', {
      courseId,
      courseName,
      instructor,
      averageRating,
      gradingPattern,
      workload,
      difficulty,
      teachingStyle,
      satisfaction,
      comments,
    });
    setCourseId('');
    setCourseName('');
    setInstructor('');
    setAverageRating('');
    setGradingPattern('');
    setWorkload('');
    setDifficulty('');
    setTeachingStyle('');
    setSatisfaction('');
    setComments('');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <Typography variant="h4" gutterBottom>Submit Reviews</Typography>
      <StyledForm onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Course ID"
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Course Name"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Instructor"
              value={instructor}
              onChange={(e) => setInstructor(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Average Rating"
              value={averageRating}
              onChange={(e) => setAverageRating(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Grading Pattern"
              value={gradingPattern}
              onChange={(e) => setGradingPattern(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Workload"
              value={workload}
              onChange={(e) => setWorkload(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Teaching Style"
              value={teachingStyle}
              onChange={(e) => setTeachingStyle(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Satisfaction"
              value={satisfaction}
              onChange={(e) => setSatisfaction(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              fullWidth
              multiline
              rows={4}
              required
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '1rem' }} style={{ backgroundColor: pink[500] }} >
          Submit
        </Button>
      </StyledForm>
    </div>
  );
}

export default SubmitReviewPage;
