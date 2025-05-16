import React from 'react';
import { ImSearch } from 'react-icons/im';

const SearchAddBar = ({ moduleName, onSearchChange, onAddClick }) => {
    return (
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3 pl-3 bg-white py-0 w-3/5 rounded">
                
                <input
                    type="text"
                    placeholder={`Rechercher un ${moduleName.toLowerCase()}`}
                    className="outline-none w-full bg-white p-2 border border-gray-300"
                    onChange={onSearchChange}
                />
                {/* <ImSearch className="text-gray-600 text-xl" /> */}
            </div>
            <div>
                <button
                    onClick={onAddClick}
                    className="bg-green-900 hover:bg-green-950 px-4 p-2 flex justify-center items-center gap-1 text-white rounded shadow"
                    title={`Ajouter un nouveau ${moduleName.toLowerCase()}`}
                >
                    <span className="text-xl font-bold">+</span>
                </button>
            </div>
        </div>
    );
};

export default SearchAddBar;
