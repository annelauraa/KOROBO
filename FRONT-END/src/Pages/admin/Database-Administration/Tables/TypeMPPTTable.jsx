import React, { useState } from 'react';
import SearchAddBar from '../../../../Components/admin/SearchAddBar/SearchAddBar';

import { IoMdTrash } from 'react-icons/io';
import { MdEdit } from 'react-icons/md';

const TypeMPPTTable = () => {
    const [search, setSearch] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        console.log(search);
    };

    const handleAddClick = () => {
        // Ouvre un modal ou une action d’ajout
        console.log("Ajout d'un Type de PV");
    };

    return (
        <div>
            <SearchAddBar
                moduleName="Type de MPPT"
                onSearchChange={handleSearchChange}
                onAddClick={handleAddClick}
            />

            <table className='w-full'>
                <thead className='bg-gray-100 text-start'>
                    <tr className='text-start'>
                        <th className='py-2 pl-2 text-start'>ID</th>
                        <th className='py-2  text-start'>Type</th>
                        <th className='py-2 text-start'>Description</th>
                        <th className='py-2 text-start'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <td className='p-2'>1</td>
                    <td>Monocristallin</td>
                    <td>...</td>
                    <td className=' py-3 text-center flex flex-row gap-4 justify-start items-center '>
                        <span title='Modifier' className='cursor-pointer hover:scale-110'><IoMdTrash className='text-korobo hover:text-green-700' /></span>
                        <span title='Modifier' className='cursor-pointer hover:scale-110'><MdEdit className='text-korobo hover:text-green-700' /></span>
                    </td>
                </tbody>
            </table>
        </div>
    );
};

export default TypeMPPTTable;