import React, { useState, useEffect } from 'react';
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import { FaUserAstronaut } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'; 
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const UserIcon = () => { 

  const token = Cookies.get('token'); 
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.sub;
  const [userData, setUserData] = useState(null);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/users/${userId}`, config);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [userId]);

  const handleLogout = () => {
    Cookies.remove('token');
    window.location.reload();
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="rounded-full border border-gray-200 w-10 h-10 dark:border-gray-800 mr-10"
            size="icon" variant="ghost"><FaUserAstronaut size={20}/>
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>{userId.firstName}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem><Link to="/account/dashboard">Mon compte</Link></DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>Se déconnecter</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserIcon;






