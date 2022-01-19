import { Box, Paper, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { withAuth } from 'hocs';
import axios from 'axios';

const Home = ({ user, setUser }) => {
  const { username, password } = user;
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .get('/logout')
      .then(({ data: { user } }) => {
        setUser(null);
        navigate('/login');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        p={2}
        width={320}
        display={'flex'}
        flexDirection={'column'}
        component={Paper}
      >
        <Typography variant="h2">Hello User</Typography>
        <Typography variant="body1">Username: {username}</Typography>
        <Typography variant="body1">Password: {password}</Typography>

        <Button sx={{ mt: 2 }} fullWidth variant="contained" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default withAuth(Home);
