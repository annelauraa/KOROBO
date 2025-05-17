import api from './api';

// Techniciens

export const getAllUtilisateurs = async (id_entreprise) => {
    try {
        const response = await api.get(`/utilisateurs/getall/${id_entreprise}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error.response?.data?.error || 'Erreur lors de la récupération des utilisateurs';
    }
};
export const getAllTechniciens = async (id_entreprise) => {
    try {
        const response = await api.get(`/utilisateurs/getalltechniciens/${id_entreprise}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error.response?.data?.error || 'Erreur lors de la récupération des techniciens';
    }
};

export const getUtilisateurById = async (id) => {
    try {
        const response = await api.get(`/utilisateurs/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error.response?.data?.error || 'Erreur lors de la récupération de l’utilisateur';
    }
};

export const createUtilisateur = async (utilisateurData) => {
    try {
        const response = await api.post('/utilisateurs', utilisateurData);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error.response?.data?.error || 'Erreur lors de la création de l’utilisateur';
    }
};

export const updateUtilisateur = async (id, updatedData) => {
    try {
        const response = await api.put(`/utilisateurs/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error.response?.data?.error || 'Erreur lors de la mise à jour de l’utilisateur';
    }
};

export const deleteUtilisateur = async (id) => {
    try {
        const response = await api.delete(`/utilisateurs/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error.response?.data?.error || 'Erreur lors de la suppression de l’utilisateur';
    }
};

export const searchUtilisateurs = async (index, id_connected, id_entreprise) => {
    try {
        const response = await api.get(`/utilisateurs/search/${index}/${id_connected}/${id_entreprise}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error.response?.data?.error || 'Erreur lors de la recherche d’utilisateurs';
    }
};

//Materiel 

// Récupérer tous les matériels d'une entreprise, optionnellement filtrés par type
export const getMateriels = async (id_entreprise, material_type = null) => {
    try {
        const url = material_type
            ? `/materiels/byType/${id_entreprise}/${material_type}`
            : `/materiels/all/${id_entreprise}`;
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error.response?.data?.error || 'Erreur lors de la récupération des matériels';
    }
};

// Obtenir un matériel par son ID
export const getMaterielById = async (id) => {
    try {
        const response = await api.get(`/materiels/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error.response?.data?.error || 'Erreur lors de la récupération du matériel';
    }
};

// Créer un matériel (type inclus dans materielData)
export const createMateriel = async (materielData) => {

    console.log(materielData);
    
    try {
        const response = await api.post('/materiels', materielData);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error.response?.data?.error || 'Erreur lors de la création du matériel';
    }
};

// Mettre à jour un matériel
export const updateMateriel = async (id, updatedData) => {
    try {
        const response = await api.put(`/materiels/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error.response?.data?.error || 'Erreur lors de la mise à jour du matériel';
    }
};

// Supprimer un matériel
export const deleteMateriel = async (id) => {
    try {
        const response = await api.delete(`/materiels/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error.response?.data?.error || 'Erreur lors de la suppression du matériel';
    }
};
