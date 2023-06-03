import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Typography variant="h6" component="h6" gutterBottom>
          Welcome back with mui UI
        </Typography>
      </Box>
    </Container>
  );
}
