import React from 'react';
import success_image from '../../assets/images/gif/success.gif'
const VerifyAccount = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <img src={success_image} alt="" className='w-50 h-50' />
            <h2 className='text-korobo text-3xl font-bold'>Votre inscription a été faite avec succès</h2>
            <p className='text-gray-700 '>Pour activer votre compte, veuiller vérifier votre boîte de réception (et vos spams au besoin).</p>
        </div>
    );
};

export default VerifyAccount;