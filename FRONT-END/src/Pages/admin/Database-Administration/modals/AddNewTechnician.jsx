import React, { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { createUtilisateur, updateUtilisateur } from '../../../../services/DBadminService';

const AddNewTechnician = ({ 
    onClose, 
    onTechnicianAdded, 
    id_entreprise, 
    isEditMode = false, 
    technicien = null 
}) => {
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        poste: ''
    });

    useEffect(() => {
        if (isEditMode && technicien) {
            setFormData({
                nom: technicien.nom || '',
                email: technicien.email || '',
                poste: technicien.poste || ''
            });
        }
    }, [isEditMode, technicien]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            if (isEditMode) {
                await updateUtilisateur(technicien.id, formData);
            } else {
                await createUtilisateur({
                    ...formData,
                    mot_de_passe: '123456', // mot de passe par défaut
                    role: 'technicien',
                    id_entreprise
                });
            }

            onTechnicianAdded(); // refresh la liste
            onClose(); // fermer le modal
        } catch (error) {
            alert('Erreur : ' + (error.message || error));
        }
    };

    return (
        <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-1/3 shadow-lg relative">
                <IoClose 
                    className="absolute top-4 right-4 text-xl cursor-pointer" 
                    onClick={onClose} 
                />
                <h2 className="text-lg font-semibold mb-4">
                    {isEditMode ? 'Modifier le technicien' : 'Ajouter un nouveau technicien'}
                </h2>
                <form className="flex flex-col gap-2">
                    <label htmlFor="nom">Nom</label>
                    <input 
                        type="text" 
                        name="nom" 
                        id="nom" 
                        value={formData.nom} 
                        onChange={handleChange} 
                        className="border p-2 rounded" 
                    />

                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="border p-2 rounded" 
                    />

                    <label htmlFor="poste">Poste</label>
                    <input 
                        type="text" 
                        name="poste" 
                        id="poste" 
                        value={formData.poste} 
                        onChange={handleChange} 
                        className="border p-2 rounded" 
                    />
                </form>

                <div className="mt-6 flex justify-end gap-4">
                    <button 
                        onClick={onClose} 
                        className="px-4 py-2 rounded bg-gray-300"
                    >
                        Annuler
                    </button>
                    <button 
                        onClick={handleSubmit} 
                        className="px-4 py-2 rounded bg-green-900 text-white"
                    >
                        {isEditMode ? 'Modifier' : 'Enregistrer'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddNewTechnician;
