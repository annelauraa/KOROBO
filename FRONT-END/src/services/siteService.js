import api from './api';


export const getAllSites = async (id_entreprise) => {
    try {
        const response = await api.get(`/sites/all/${id_entreprise}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error.response?.data?.error || 'Erreur lors de la connexion';
    }
};

export const deleteSiteById = async (id_site) => {
    try {
        const response = await api.delete(`/sites/${id_site}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error.response?.data?.error || 'Erreur lors de la connexion';
    }
};