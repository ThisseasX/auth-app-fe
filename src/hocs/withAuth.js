import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const withAuth = (Component) => (props) => {
  const { user, setUser } = props;

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      axios
        .post('/verifyToken')
        .then(({ data: { user } }) => {
          setUser(user);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setUser(null);
          setLoading(false);
          navigate('/login');
        });
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !loading && user ? <Component {...props} /> : <div>Loading...</div>;
};
