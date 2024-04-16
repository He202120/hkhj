import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

function SignedIn({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  if (isAuthenticated) {
    return children;
  } else {
    return null;
  }
}

export default SignedIn;
