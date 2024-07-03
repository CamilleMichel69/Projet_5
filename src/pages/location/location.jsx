import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import datas from '../../datas/logements.json';
import Carrousel from '../../components/location/Carrousel/carrousel';
import Tags from '../../components/location/Tags/tags';
import Rate from '../../components/location/Rate/rate';
import Host from '../../components/location/Host/host';
import Collapse from '../../components/collapse/collapse';

const Location = () => {
    const { id } = useParams();
    const logement = datas.find((logement) => logement.id === id);

    return (
        <main>
            {logement ? (
                <>
                  <Carrousel pictures={logement.pictures} title={logement.title}/>
                  <div className='location__details'>
                    <div>
                        <h1>{logement.title}</h1>
                        <h2>{logement.location}</h2>
                        <Tags tags={logement.tags} />
                    </div>  
                    <div className='location__hostRate'>
                        <Host name={logement.host.name} picture={logement.host.picture} />
                        <Rate rating={logement.rating} />
                    </div>
                  </div>
                  <div className='location__details'>
                    <Collapse title="Description" content={logement.description} />
                    <Collapse title="Équipements" content={logement.equipments} />
                  </div>
                </>
            ) : (
                <Navigate replace to="/404" />
            )}
        </main>
    );
};

export default Location;
