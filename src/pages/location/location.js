import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import datas from '../../datas/logements.json';
import Carrousel from '../../components/Carrousel/carrousel';
import Collapse from '../../components/collapse/collapse';

const Location = () => {
    const { id } = useParams();
    const logement = datas.find((logement) => logement.id === id);

    return (
        <main>
            {logement ? (
                <>
                    <Carrousel pictures={logement.pictures} title={logement.title}/>
                    {/* Affichez d'autres détails du logement ici */}
                    <h1>{logement.title}</h1>
                    <Collapse />
                </>
            ) : (
                <Navigate replace to="/404" />
            )}
        </main>
    );
};

export default Location;
