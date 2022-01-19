import { useState } from 'react';
import { Box, Paper, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setUser }) => {
  const [form, updateForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (key) => (e) => {
    updateForm((form) => ({ ...form, [key]: e.target.value }));
  };

  const handleLogin = () => {
    const { username, password } = form;

    axios
      .post(
        'http://localhost:4000/login',
        { username, password },
        { withCredentials: true },
      )
      .then(({ data: { user } }) => {
        setUser(user);
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
        setUser(null);
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
        <TextField
          size="small"
          label="username"
          onChange={handleChange('username')}
          value={form.username}
        />

        <TextField
          size="small"
          label="password"
          sx={{ mt: 2 }}
          onChange={handleChange('password')}
          value={form.password}
        />

        <Button sx={{ mt: 2 }} fullWidth variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
