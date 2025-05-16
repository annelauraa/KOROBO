import React, { useState, useEffect } from 'react';
import SearchAddBar from '../../../../Components/admin/SearchAddBar/SearchAddBar';
import { IoMdTrash } from 'react-icons/io';
import { MdEdit } from 'react-icons/md';
import { getMateriels, deleteMateriel } from '../../../../services/DBadminService';

const MaterielTable = ({ idEntreprise, typeMateriel, moduleName = "Matériel" }) => {
  const [search, setSearch] = useState('');
  const [materiels, setMateriels] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const handleAddClick = () => {
    // TODO: Ouvrir modal ajout matériel
    console.log(`Ajouter un nouveau ${moduleName}`);
  };

  const handleEditClick = (materiel) => {
    // TODO: Ouvrir modal édition matériel
    console.log('Editer matériel:', materiel);
  };

  return (
    <div>
      <SearchAddBar
        moduleName={moduleName}
        onSearchChange={handleSearchChange}
        onAddClick={handleAddClick}
      />

      {loading ? (
        <p>Chargement...</p>
      ) : (
        <table className='w-full'>
          <thead className='bg-gray-100 text-start'>
            <tr>
              <th className='py-2 pl-2'>ID</th>
              <th className='py-2'>Type</th>
              <th className='py-2'>Description</th>
              <th className='py-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMateriels.length === 0 ? (
              <tr><td colSpan={4} className='text-center py-4'>Aucun matériel trouvé.</td></tr>
            ) : (
              filteredMateriels.map(materiel => (
                <tr key={materiel.id}>
                  <td className='p-2'>{materiel.id}</td>
                  <td>{materiel.type}</td>
                  <td>{materiel.description || "—"}</td>
                  <td className='py-3 flex gap-4'>
                    <span title='Supprimer' className='cursor-pointer hover:scale-110' onClick={() => handleDelete(materiel.id)}>
                      <IoMdTrash className='text-korobo hover:text-red-700' />
                    </span>
                    <span title='Modifier' className='cursor-pointer hover:scale-110' onClick={() => handleEditClick(materiel)}>
                      <MdEdit className='text-korobo hover:text-green-700' />
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MaterielTable;
