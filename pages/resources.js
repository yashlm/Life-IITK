import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, TextField, Button, Box } from '@mui/material';
import resources from '../src/data/resources';
import { pink, purple } from '@mui/material/colors';

function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResources, setFilteredResources] = useState(resources);

  const handleSearch = () => {
    const filtered = resources.filter((resource) => {
      return (
        resource.courseId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.courseName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredResources(filtered);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const resetSearch = () => {
    setFilteredResources(resources);
    setSearchTerm('');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <Typography variant="h4" gutterBottom>
        Resources
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
                  href="/submitresource"
                  sx={{ marginLeft: 'auto' }}
                  style={{ color: pink[500], borderColor: pink[500] }}
        >
          Submit Resources
        </Button>
      </Box>
      <Grid container spacing={2}>
        {filteredResources.map((resource) => (
          <Grid item key={resource.id} xs={12} sm={6} md={4}>
            <Card style={{ border: '1px solid rgba(0, 0, 0, 0.12)', boxShadow: 'none' }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  Course: {resource.courseName} ({resource.courseId})
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Submitted by: {resource.submittedBy}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description: {resource.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Link: <a href={resource.link} target="_blank" rel="noopener noreferrer">{resource.link}</a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ResourcesPage;
