import React, { useState, useEffect } from 'react';
import SearchAddBar from '../../../../Components/admin/SearchAddBar/SearchAddBar';
import { IoMdTrash } from 'react-icons/io';
import { MdEdit } from 'react-icons/md';
import { getMateriels, deleteMateriel, createMateriel, updateMateriel } from '../../../../services/DBadminService';
import ModalMateriel from '../modals/ModalMateriel'; 

const MaterielTable = ({ idEntreprise, typeMateriel, moduleName = "Matériel" }) => {
  const [search, setSearch] = useState('');
  const [materiels, setMateriels] = useState([]);
  const [loading, setLoading] = useState(false);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMateriel, setCurrentMateriel] = useState(null);

  const fetchMateriels = async () => {
    setLoading(true);
    try {
      const data = await getMateriels(idEntreprise, typeMateriel);
      setMateriels(data);
    } catch (error) {
      console.error("Erreur lors du chargement des matériels:", error);
      setMateriels([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMateriels();
  }, [idEntreprise, typeMateriel]);

  const filteredMateriels = materiels.filter(materiel => {
    const searchLower = search.toLowerCase();
    return (
      materiel.type.toLowerCase().includes(searchLower) ||
      (materiel.description && materiel.description.toLowerCase().includes(searchLower))
    );
  });

  const handleDelete = async (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer ce matériel ?")) {
      try {
        await deleteMateriel(id);
        fetchMateriels();
      } catch (error) {
        alert("Erreur lors de la suppression");
        console.error(error);
      }
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const openAddModal = () => {
    setCurrentMateriel(null);
    setIsModalOpen(true);
  };

  const openEditModal = (materiel) => {
    setCurrentMateriel(materiel);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitModal = async (formData) => {
    try {
      if (currentMateriel && currentMateriel.id) {
        // Mise à jour
        await updateMateriel(currentMateriel.id, formData);
      } else {
        // Création, ajoute idEntreprise et typeMateriel si besoin
        await createMateriel({ ...formData, id_entreprise: idEntreprise, type: typeMateriel });
      }
      fetchMateriels();
      closeModal();
    } catch (error) {
      alert("Erreur lors de l'enregistrement");
      console.error(error);
    }
  };

  return (
    <div>
      <SearchAddBar
        moduleName={moduleName}
        onSearchChange={handleSearchChange}
        onAddClick={openAddModal}
      />

      {loading ? (
        <p>Chargement...</p>
      ) : (
        <table className='w-full'>
          <thead className='bg-gray-100 '>
            <tr>
              <th className='py-2 pl-2 text-start'>ID</th>
              <th className='py-2 text-start'>Marque</th>
              <th className='py-2 text-start'>Constructeur</th>
              <th className='py-2 text-start'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMateriels.length === 0 ? (
              <tr><td colSpan={4} className='text-center py-4'>Aucun matériel trouvé.</td></tr>
            ) : (
              filteredMateriels.map(materiel => (
                <tr key={materiel.id}>
                  <td className='p-2'>{materiel.id}</td>
                  <td>{materiel.marque}</td>
                  <td>{materiel.constructeur || "—"}</td>
                  <td className='py-3 flex gap-4'>
                    <span title='Supprimer' className='cursor-pointer hover:scale-110' onClick={() => handleDelete(materiel.id)}>
                      <IoMdTrash className='text-korobo hover:text-red-700' />
                    </span>
                    <span title='Modifier' className='cursor-pointer hover:scale-110' onClick={() => openEditModal(materiel)}>
                      <MdEdit className='text-korobo hover:text-green-700' />
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}

      <ModalMateriel
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleSubmitModal}
        initialData={currentMateriel || {}}
        moduleName={moduleName}
      />
    </div>
  );
};

export default MaterielTable;
