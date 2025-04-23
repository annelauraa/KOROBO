import React from 'react';
import './ViewSiteDetailsModal.css'; // Import your CSS file here
import { IoClose } from 'react-icons/io5';

const ViewSiteDetailsModal = ({ site, onCloseChange }) => {
    const handleClose = () => {
        // tu peux envoyer false au parent par exemple
        onCloseChange(false);
      };
    console.log("site", site);
    
    return (

        <>
                <div className=" inset-0 backdrop flex items-center justify-center rounded-xl">
                    <div className="bg-white rounded-xl  w-2/3 min-h-5/6 shadow-lg">
                        <div className='flex flex-row justify-between items-center bg-korobo text-white py-4 px-8 rounded-t-xl'>
                            <h2 className='text-xl font-bold '>Détails du Site : </h2>
                            <IoClose className='text-xl font-bold cursor-pointer' onClick={handleClose}/>
                        </div>
                        <div className='px-8'>
                            <div className='flex flex-row justify-between pt-10 '>
                                <div className='flex flex-col w-2/3 justify-between gap-2 '>
                                    <h4 className='text-sm text-gray-500 font-bold'>Informations générales </h4>
                                    <label htmlFor="siteName" className='text-sm' >Nom du site: <span className='font-semibold'>{site.nom}</span> </label>
                                    <label htmlFor="location" className='text-sm'>Localisation: <span className='font-semibold'>{site.localisation}</span></label>
                                </div>
                                <div className='w-1/2 '>
                                    <h4 className='text-sm text-gray-500 font-bold'>Contrat SAV</h4>
                                    <label htmlFor="contractType" className='text-sm'>Type de contrat: <span className='font-semibold'>{site.type_contrat_ContratSAV.designation}</span></label>
                                </div>
                            </div>
                            <hr className='my-5 text-gray-300' />
                            <div className='flex flex-row gap-2'>
                                <h4 className='text-sm text-gray-500 font-bold'>Installateur</h4>
                            </div>
                            <hr className='my-5 text-gray-300' />
                            <div className='flex flex-row gap-2'>
                                <h4 className='text-sm text-gray-500 font-bold'>Informations Matérielles</h4>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default ViewSiteDetailsModal;