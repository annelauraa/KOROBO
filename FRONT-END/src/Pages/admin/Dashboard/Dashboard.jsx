import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

import './Dashboard.css';

const performanceData = {
    labels: ['Site 1', 'Site 2', 'Site 3', 'Site 4', 'Site 5'],
    datasets: [
        {
            label: 'Performance',
            data: [85, 78, 92, 67, 95],
            backgroundColor: 'rgba(75, 255, 200, 0.2)',
            borderColor: 'rgba(0, 255, 200, 1)',
            borderWidth: 1,
        },
    ],
};

const Dashboard = () => {
    return (
        <div className='cursor-pointer'>
            {/* Section - Statistiques générales */}
            <div className="flex items-center justify-center">
                <div className="flex-2/3 gap-5 bg-white p-6 ">
                    <hr  className='text-stone-100'/>
                    <h3 className="text-xl font-semibold my-4 bg-korobo text-white p-2">Performance des Sites</h3>
                    <Bar data={performanceData} />
                </div>

                <div className="grid grid-cols-1 rounded-lg shadow-md  gap-6 text-sm">
                    <div className="bg-green-50 p-4 ">
                        <h3 className="text-xl font-semibold mb-4">Statistiques Globales</h3>
                        <ul>
                            <li className="flex justify-between mb-2">
                                <span>Total des sites suivis :</span>
                                <span className="font-bold">35</span>
                            </li>
                            <li className="flex justify-between mb-2">
                                <span>Sites en maintenance :</span>
                                <span className="font-bold text-red-500">5</span>
                            </li>
                            <li className="flex justify-between mb-2">
                                <span>Sites opérationnels :</span>
                                <span className="font-bold text-green-500">30</span>
                            </li>
                        </ul>
                    </div>

                    {/* Section - Maintenance récente */}
                    <div className="bg-green-50 p-4 ">
                        <h3 className="text-xl font-semibold mb-4 text-korobo">Maintenance récente</h3>
                        <table className="min-w-full table-auto text-center">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Site</th>
                                    <th className="px-4 py-2">Date de maintenance</th>
                                    <th className="px-4 py-2">Statut</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-2">Site 1</td>
                                    <td className="px-4 py-2">10/05/2025</td>
                                    <td className="px-4 py-2 text-yellow-500">En cours</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Site 2</td>
                                    <td className="px-4 py-2">08/05/2025</td>
                                    <td className="px-4 py-2 text-green-500">Terminé</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Section - Alertes */}
                    <div className="bg-red-500 p-4 text-white ">
                        <h3 className="text-xl font-semibold mb-4">Alertes</h3>
                        <ul>
                            <li className=" justify-between mb-2">
                                <span>Site 4 nécessite une vérification des panneaux solaires.</span>
                            </li>
                            <li className="flex justify-between mb-2">
                                <span>Site 12 : mise à jour du système de surveillance prévue.</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Dashboard;