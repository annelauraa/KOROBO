import React, { useState } from 'react';
import './DBAdmin.css';
import TechnicienTable from './Tables/TechnicienTable';
// import TypeContratSavTable from './Tables/TypeContratSavTable';
import MaterielTable from './Tables/MaterielTable';

const DBAdmin = () => {
  const [selected, setSelected] = useState('Techniciens');

  // Materiels avec leur type et moduleName
  const materielTypes = {
    'Type de PV': { typeMateriel: 'pv', moduleName: 'Type de PV' },
    'Type de MPPT': { typeMateriel: 'mppt', moduleName: 'Type de MPPT' },
    'Type de Convertisseur': { typeMateriel: 'convertisseur', moduleName: 'Type de Convertisseur' },
    'Type de Controlleur': { typeMateriel: 'controlleur', moduleName: 'Type de Controlleur' },
    'Type d\'Onduleur': { typeMateriel: 'onduleur', moduleName: 'Type d\'Onduleur' },
    'Type de Batterie': { typeMateriel: 'batterie', moduleName: 'Type de Batterie' }
  };

  const menuItems = [
    'Techniciens',
    ...Object.keys(materielTypes),
    // 'Type de Contrat SAV' 
  ];

  const renderContent = () => {
    if (selected === 'Techniciens') {
      return <TechnicienTable />;
    }
    // if (selected === 'Type de Contrat SAV') {
    //   return <TypeContratSavTable />;
    // }

    const { typeMateriel, moduleName } = materielTypes[selected] || {};
    if (!typeMateriel) return <p>Section non trouvée</p>;

    return <MaterielTable idEntreprise={1} typeMateriel={typeMateriel} moduleName={moduleName} />;
  };

  return (
    <div className='flex'>
      <div className='w-1/5 bg-gray-50'>
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`my-3 cursor-pointer p-3 ${selected === item ? 'bg-[#3c3c3c] text-white font-bold' : 'text-gray-900'}`}
              onClick={() => setSelected(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className='w-4/5 p-3 overflow-y-auto'>
        {renderContent()}
      </div>
    </div>
  );
};

export default DBAdmin;
