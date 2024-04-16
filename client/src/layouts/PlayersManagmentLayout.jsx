import { useState, useEffect } from "react";
import axios from 'axios';
import DataTable from "@/components/DataTable";
import DataLine from "@/components/DataTable/DataLine";
import DataLineCell from "@/components/DataTable/DataLineCell";
import DataHeader from "@/components/DataTable/DataHeader";
import DataHeadCol from "@/components/DataTable/DataHeadCol";
import { Button } from "@/components/ui/button";


function usePlayers(role) {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/players', { params: { role } })
            .then(response => {
                setPlayers(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [role]); 

    return players;
}

function Postulants() {
    const postulants = usePlayers('postulant');

    return (
        <div className="w-full lg:w-3/4 mx-auto">
            <div className="p-4 flex">
                <h1 className="text-3xl font-semibold">Joueurs en attente</h1>
            </div>
            <DataTable>
                    <DataHeader>
                        <DataHeadCol col="Nom" />
                        <DataHeadCol col="Prénom" />
                        <DataHeadCol col="Date de naissance" />
                        <DataHeadCol col="Téléphone" />
                        <DataHeadCol col="Email" />
                        <DataHeadCol col="Présentation" />
                        <DataHeadCol col="" />
                    </DataHeader>
                    {postulants.map((postulant, index) => (
                        <DataLine key={index}>
                            <DataLineCell>
                                <h1>{postulant.lastName}</h1>
                            </DataLineCell>
                            <DataLineCell>
                                <h1>{postulant.firstName}</h1>
                            </DataLineCell>
                            <DataLineCell>
                                <h1>{new Intl.DateTimeFormat('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }).format(postulants.dateOfBirth)}</h1>
                            </DataLineCell>
                            <DataLineCell>
                                <h1>{postulant.email}</h1>
                            </DataLineCell>
                            <DataLineCell>
                                <h1>{postulant.phone}</h1>
                            </DataLineCell>
                            <DataLineCell>
                                <h1>{postulant.description}</h1>
                            </DataLineCell>
                            <DataLineCell>
                                <Button className="bg-red-600 mr-5 hover:bg-red-700">Rejeter</Button>
                                <Button className="bg-blue-600 hover:bg-blue-700">Accepter</Button>
                            </DataLineCell>
                        </DataLine>
                    ))}
                </DataTable>
        </div>
    );
}

function Players() {
    const players = usePlayers('player');

    return (
        <div className="w-full lg:w-3/4 mx-auto">
            <div className="p-4 flex">
                <h1 className="text-3xl font-semibold">Joueurs acceptés</h1>
            </div>
            
            <DataTable>
                <DataHeader>
                    <DataHeadCol col="Nom" />
                    <DataHeadCol col="Prénom" />
                    <DataHeadCol col="Date de naissance" />
                    <DataHeadCol col="Téléphone" />
                    <DataHeadCol col="Email" />
                </DataHeader>
                {players.map((player, index) => (
                    <DataLine key={index}>
                        <DataLineCell>
                            <h1>{player.firstName}</h1>
                        </DataLineCell>
                        <DataLineCell>
                            <h1>{player.lastName}</h1>
                        </DataLineCell>
                        <DataLineCell>
                            <h1>{new Intl.DateTimeFormat('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }).format(players.dateOfBirth)}</h1>
                        </DataLineCell>
                        <DataLineCell>
                            <h1>{player.email}</h1>
                        </DataLineCell>
                        <DataLineCell>
                            <h1>{player.phone}</h1>
                        </DataLineCell>
                    </DataLine>
                ))}
            </DataTable>
        </div>
    );
}

const GestionJoueurs = () => {
  return (
    <div>
        <Postulants />
        <Players />
    </div>
  )
}

export default GestionJoueurs;








