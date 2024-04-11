import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';

function Liste_evenement() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/agenda")
            .then(res => {
                console.log("Données reçues de la base de données :", res.data); // Ajout du console.log
                const eventsData = res.data.map(event => ({
                    title: event.evenements,
                    start: new Date(event.date.split('T')[0] + "T" + event.start), // Combinez la date et l'heure pour créer une date JS valide
                    end: new Date(event.date.split('T')[0] + "T" + event.end), // Utilisez la même heure de début et de fin pour simplifier
                }));
                console.log(eventsData)
                setEvents(eventsData);
            })
            .catch(err => console.log(err));
    }, []);
    const localizer = momentLocalizer(moment);

    return (
        <div style={{ height: 500 }}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ margin: 'auto', width: '70%' }}
            />
        </div>
    );
}

export default Liste_evenement;

