import { useState, useEffect } from 'react';
import axios from 'axios';
import DataHeader from '../components/DataTable/DataHeader';
import DataHeadCol from '../components/DataTable/DataHeadCol';
import DataLine from '@/components/DataTable/DataLine';
import DataLineCell from '@/components/DataTable/DataLineCell';
import DataTable from '@/components/DataTable';
import NavBar from '@/components/NavBar';
import { Button } from '@/components/ui/button';
import PlayersManagmentLayout from '@/layouts/PlayersManagmentLayout';

const getCookie = (name) => {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName.trim() === name) {
        return cookieValue;
      }
    }
    return null;
};


function Gestionnaire() {
    return (
        <>
            <NavBar></NavBar>
            <PlayersManagmentLayout />
        </>
    )
}

export default Gestionnaire;













