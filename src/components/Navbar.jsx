import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Stack>
      <Link to="/">
        <img
          src="https://res.cloudinary.com/rps-technologies/image/upload/v1685775974/gym-application/Logo.png"
          alt=""
          style={{ height: '48px', width: '48px', margin: '0 20px' }}
        />
      </Link>
      <Stack></Stack>
    </Stack>
  );
};
