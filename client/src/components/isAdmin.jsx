import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode'; 

function IsAdmin({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token'); 
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken && decodedToken.role === 'admin') {
        setIsAdmin(true);
      }
    }
  }, []);

  if (!isAdmin) {
    return children;
  } else {
    return null;
  }
}

export default IsAdmin;




