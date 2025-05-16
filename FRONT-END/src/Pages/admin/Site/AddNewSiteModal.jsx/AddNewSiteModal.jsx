import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { createSite } from '../../../../services/siteService'; 

const AddNewSiteModal = ({ onClose, onSiteAdded, id_entreprise }) => {
    const [formData, setFormData] = useState({
        nom: '',
        localisation: '',
        proprietaire: '',
        numero_dossier: '',
        installateur: '',
        contact_1: '',
        contact_2: '',
        type_installation: '',
        type_electrique: '',
        schema_SLD: '',
        id_entreprise: id_entreprise,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            await createSite(formData);
            onSiteAdded();   // Pour rafraîchir la liste
            onClose();       // Fermer la modale
        } catch (error) {
            alert('Erreur lors de l’ajout du site : ' + error);
        }
    };

    return (
        <div className="fixed inset-0 backdrop flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-1/3 shadow-lg relative">
                <IoClose
                    className="absolute top-4 right-4 text-xl cursor-pointer"
                    onClick={onClose}
                />
                <h2 className="text-lg font-semibold mb-4">Ajouter un nouveau site</h2>

                {/* Formulaire */}
                <div className="grid grid-cols-2 gap-4">
                    {[
                        { label: 'Nom', name: 'nom' },
                        { label: 'Localisation', name: 'localisation' },
                        { label: 'Propriétaire', name: 'proprietaire' },
                        { label: 'N° Dossier', name: 'numero_dossier' },
                        { label: 'Contact 1', name: 'contact_1' },
                        { label: 'Contact 2', name: 'contact_2' },
                        { label: 'Installateur (ID)', name: 'installateur' },
                        { label: 'Type installation (ID)', name: 'type_installation' },
                        { label: 'Type électrique (ID)', name: 'type_electrique' },
                        { label: 'Lien schema SLD', name: 'schema_SLD' },
                    ].map((field) => (
                        <div key={field.name} className="flex flex-col">
                            <label className="text-sm font-medium">{field.label}</label>
                            <input
                                type="text"
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleChange}
                                className="border px-3 py-2 rounded"
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-6 flex justify-end gap-4">
                    <button onClick={onClose} className="px-4 py-2 rounded bg-gray-300">
                        Annuler
                    </button>
                    <button onClick={handleSubmit} className="px-4 py-2 rounded bg-green-900 text-white">
                        Enregistrer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddNewSiteModal;
