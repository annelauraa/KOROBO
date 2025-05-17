import React, { useState, useEffect } from 'react';

const ModalMateriel = ({ isOpen, onClose, onSubmit, initialData = {}, moduleName, typeMateriel }) => {
  const [type, setType] = useState('');
  const [marque, setMarque] = useState('');
  const [constructeur, setConstructeur] = useState('');

  useEffect(() => {
    if (isOpen) {
      const normalizedType = typeMateriel.toLowerCase().replace(/[^a-z0-9]/g, '');
      setType(normalizedType);
      
      setMarque(initialData.marque || '');
      setConstructeur(initialData.constructeur || '');
    }
  }, [isOpen, initialData, moduleName, typeMateriel]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!marque.trim()) {
      alert("Le champ 'Désignation' est obligatoire");
      return;
    }
    onSubmit({ type, marque, constructeur });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 max-w-full">
        <h2 className="text-xl font-bold mb-4">
          {initialData.id ? `Modifier ${moduleName}` : `Ajouter un ${moduleName}`}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="hidden" value={type} />

          <label className="flex flex-col">
            Marque *
            <input
              type="text"
              value={marque}
              onChange={(e) => setMarque(e.target.value)}
              className="border border-gray-300 rounded p-2 mt-1"
              required
              placeholder={`Entrez la désignation du ${moduleName}`}
            />
          </label>
          <label className="flex flex-col">
            Constructeur *
            <input
              type="text"
              value={constructeur}
              onChange={(e) => setConstructeur(e.target.value)}
              className="border border-gray-300 rounded p-2 mt-1"
              required
              placeholder={`Entrez la désignation du ${moduleName}`}
            />
          </label>
          

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
            >
              Annuler
            </button>

            <button
              type="submit"
              className="px-4 py-2 rounded bg-korobo text-white hover:bg-korobo-dark"
            >
              {initialData.id ? 'Modifier' : 'Ajouter'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalMateriel;
