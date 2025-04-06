import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
    return (
        <div className='home-main-content text-white text-start pt-10'>
           <motion.div className=" main-container sm:py-16 text-white">
            <div className="min-h-screen max-w-7xl mx-auto px-6 lg:px-8">
          {/* <motion.section className="ml-35 mt-15"> */}
            <motion.section className="flex flex-col gap-3">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl "
            >
              {/* <span className="text-white">Bienvenue sur</span> */}
            </motion.h1>
            <motion.h1>
              {/* <span className="text-8xl font-bold text-korobo "> KOROBO</span> */}
            </motion.h1>
            {/* <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-4 text-white w-100"
            >
              L`application KOROBO vous permet de gérer efficacement la
              maintenance de vos sites photovoltaïques.
            </motion.p> */}
            
            </motion.section>
          
        </div>
      </motion.div>
        </div>
    );
};

export default Home;