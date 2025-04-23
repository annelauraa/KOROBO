import React from 'react';

const AddNewSiteModal = ({site}) => {
    return (
        <div className=" inset-0 backdrop flex items-center justify-center ">
            <div className="bg-white rounded-xl p-6 w-1/3 shadow-lg">
                <h2 className="text-lg font-semibold mb-4">{site?'Modification' : ''}</h2>
            </div>
        </div>
    );
};

export default AddNewSiteModal;