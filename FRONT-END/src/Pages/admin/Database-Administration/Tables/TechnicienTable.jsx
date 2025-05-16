import React, { useEffect, useState } from 'react';
import SearchAddBar from '../../../../Components/admin/SearchAddBar/SearchAddBar';
import { MdEdit } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';
import AddNewTechnician from '../modals/AddNewTechnician';
import { getAllTechniciens, deleteUtilisateur } from '../../../../services/DBadminService';
import { useUser } from '../../../../utils/UserContext';

const TechnicienTable = () => {
    const [search, setSearch] = useState('');
    const [techniciens, setTechniciens] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [selectedTechnicien, setSelectedTechnicien] = useState(null);

    const { user } = useUser();

    const fetchTechniciens = async () => {
        try {
            const data = await getAllTechniciens(user.id_entreprise);
            setTechniciens(data);
        } catch (error) {
            console.log(error);
            alert("Erreur lors du chargement des techniciens");
        }
    };

    useEffect(() => {
        fetchTechniciens();
    }, []);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleAddClick = () => {
        setIsAddModalOpen(true);
        setIsEditMode(false);
        setSelectedTechnicien(null);
    };

    const handleEditClick = (technicien) => {
        setSelectedTechnicien(technicien);
        setIsEditMode(true);
        setIsAddModalOpen(true);
    };

    const handleDeleteClick = async (id) => {
        const confirm = window.confirm("Voulez-vous vraiment supprimer ce technicien ?");
        if (confirm) {
            try {
                await deleteUtilisateur(id);
                fetchTechniciens(); 
            } catch (error) {
                console.log(error);
                
                alert("Erreur lors de la suppression");
            }
        }
    };

    const filteredTechniciens = techniciens.filter(t =>
        t.nom.toLowerCase().includes(search.toLowerCase()) ||
        t.email.toLowerCase().includes(search.toLowerCase()) ||
        t.poste.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <SearchAddBar
                moduleName="Technicien"
                onSearchChange={handleSearchChange}
                onAddClick={handleAddClick}
            />

            <table className='w-full mt-4'>
                <thead className='bg-gray-100 text-start'>
                    <tr>
                        <th className='py-2 pl-2 text-start'>ID</th>
                        <th className='py-2 text-start'>Nom</th>
                        <th className='py-2 text-start'>Email</th>
                        <th className='py-2 text-start'>Poste</th>
                        <th className='py-2 text-start'>Affectation</th>
                        <th className='py-2 text-start'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTechniciens.map((tech) => (
                        <tr key={tech.id}>
                            <td className='py-2 pl-2'>{tech.id}</td>
                            <td className='py-2'>{tech.nom}</td>
                            <td className='py-2'>{tech.email}</td>
                            <td className='py-2'>{tech.poste}</td>
                            <td className='py-2'>{tech.affectation === 0 ? 'Aucun' : tech.affectation}</td>
                            <td className='py-4 flex gap-3'>
                                <IoMdTrash
                                    className='text-gray-600 cursor-pointer hover:text-red-500'
                                    onClick={() => handleDeleteClick(tech.id)}
                                />
                                <MdEdit
                                    className='text-gray-600 cursor-pointer hover:text-blue-500'
                                    onClick={() => handleEditClick(tech)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isAddModalOpen && (
                <AddNewTechnician
                    onClose={() => {
                        setIsAddModalOpen(false);
                        setSelectedTechnicien(null);
                    }}
                    onTechnicianAdded={fetchTechniciens}
                    id_entreprise={user.id_entreprise}
                    isEditMode={isEditMode}
                    technicien={selectedTechnicien}
                />
            )}
        </div>
    );
};

export default TechnicienTable;
