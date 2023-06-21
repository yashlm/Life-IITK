import React, { useState } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import { pink, purple } from '@mui/material/colors';

function SubmitResourcesPage() {
  const [courseName, setCourseName] = useState('');
  const [courseId, setCourseId] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Resource:', { courseName, courseId, description, link });
    setCourseName('');
    setCourseId('');
    setDescription('');
    setLink('');
  };

  return (
    <Box sx={{ padding: '1rem' }}>
      <Typography variant="h4" gutterBottom>Submit Resources</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Course Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Course ID"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '1rem' }} style={{ backgroundColor: pink[500] }}>
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default SubmitResourcesPage;
