import Liste_membre from '@/components/Gestion/Liste_membre.jsx'
import Liste_attente from '@/components/Gestion/Liste_attente.jsx'
import { useNavigate } from 'react-router-dom'
import "./CSS/Gestionnaire.css"

function Gestionnaire(){

    const redirect = () => {
        document.location.href="/gestionnaire_inscription";
    }

    const getInscription = () => {
        useNavigate("/gestion-inscriptions", {replace : true});
    }

    return (
        <>
            <Liste_membre />
            <Liste_attente /> 
            <button className="inscriptgestion" onClick={redirect}>Inscription</button>
        </>
    );
}

export default Gestionnaire












