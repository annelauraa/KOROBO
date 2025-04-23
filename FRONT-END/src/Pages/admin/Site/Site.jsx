import { useEffect, useState } from 'react';
import { ImSearch } from "react-icons/im";
import { useUser } from "../../../utils/UserContext";
import { deleteSiteById, getAllSites } from "../../../services/siteService";
import './Site.css';
import { IoEye } from 'react-icons/io5';
import { MdEdit } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';
import AddNewSiteModal from '../../../Components/admin/AddNewSiteModal.jsx/AddNewSiteModal';
import ViewSiteDetailsModal from '../../../Components/admin/ViewSiteDetailsModal/ViewSiteDetailsModal';


const Site = () => {

    const { user } = useUser();
    const [sites, setSites] = useState([]);
    const [selectedSite, setSelectedSite] = useState(null);

    // Modals
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        console.log("user", user);
        if (user && user.id_entreprise) {
            fetchSites();
        }
    }, [user]);
    
    const fetchSites = async () => {
        try {
            const data = await getAllSites(user.id_entreprise);
            setSites(data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleView = (site) => {
        setSelectedSite(site);
        setShowViewSiteDetailsModal(true);
    }

    const handleEdit = () => {
        console.log("Modifier le site");
    }

    const handleDelete = async (site) => {
        setSelectedSite(site);
        setShowModal(true);
    }

    const confirmDelete = async () => {
        try {
            await deleteSiteById(selectedSite.id);
            fetchSites();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='flex flex-col gap-2 px-15 py-5 fond-bleu'>
            {/* Barre de recherche + boutons */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3 pl-3 bg-korobo bg-white py-0 w-1/5 rounded">
                    <ImSearch className='text-white text-xl' />
                    <input type="text" placeholder="Rechercher" className="outline-none w-full bg-white p-2 border border-gray-300" />
                </div>
                <div className="flex gap-4">
                    <button className="bg-gray-200 hover:bg-green-900 hover:text-white text-black px-5 py-2 rounded flex justify-center items-center">
                        Filtrer
                    </button>
                    <button className="bg-green-900 hover:bg-green-950 px-5 py-2 flex justify-center items-center gap-1 text-white rounded shadow">
                        <span>+</span> Ajouter
                    </button>
                </div>
            </div>

            {/* Tableau */}
            <div className="bg-white overflow-hidden text-md h-[62vh] shadow-md">
                <table className="w-full table-auto text-left">
                    <thead className="bg-[#3c3c3c] text-white text-sm">
                        <tr>

                            <th className="px-4 py-3">#</th>
                            <th className="px-4 py-3">Nom du site</th>
                            <th className="px-4 py-3">Localisation</th>
                            <th className="px-4 py-3">Contrat SAV </th>
                            <th className="px-4 py-3">Installateur</th>
                            <th className="px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sites.length > 0 ? (
                            sites.map((site, index) => (
                                <tr key={site.id} className={index % 2 !== 0 ? "bg-green-100" : "bg-white"}>
                                    <td className="px-4 py-3">{index + 1}</td>
                                    <td className="px-4 py-3">{site.nom}</td>
                                    <td className="px-4 py-3">{site.localisation}</td>
                                    <td className="px-4 py-3">{site.type_contrat_ContratSAV.designation}</td>
                                    <td className="px-4 py-3">{site.installateur_Utilisateur.nom}</td>
                                    <td className="px-4 py-3 text-center flex flex-row gap-2 justify-start items-center">
                                        <span onClick={()=>handleView(site)} title='Voir détails' className='cursor-pointer hover:scale-110 '><IoEye className='text-korobo hover:text-green-700' /></span>
                                        <span onClick={()=>handleEdit(site)} title='Modifier' className='cursor-pointer hover:scale-110 '><MdEdit className='text-korobo hover:text-green-700' /></span>
                                        <span onClick={() => handleDelete(site)} title='Supprimer' className='cursor-pointer hover:scale-110 '>
                                            <IoMdTrash className='text-korobo hover:text-green-700' />
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center py-4 text-gray-500">
                                    Aucun site trouvé.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {showModal && (
                    <div className=" inset-0 backdrop flex items-center justify-center ">
                        <div className="bg-white rounded-xl p-6 w-1/3 shadow-lg">
                            <h2 className="text-lg font-semibold mb-4">Confirmation</h2>
                            <p className="mb-6">Êtes vous sûr de vouloir supprimer <span className='text-korobo font-bold'> " {selectedSite.nom} "</span> ?</p>
                            <div className="flex justify-end gap-4">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="bg-gray-300 px-4 py-1.5 rounded"
                                >
                                    Non
                                </button>
                                <button
                                    onClick={() => {
                                        setShowModal(false);
                                        confirmDelete();
                                    }}
                                    className="bg-green-900 px-4 py-1.5 text-white rounded"
                                >
                                    Oui
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                    
            </div>

        </div>
    );
};

export default Site;
