import { React, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll"
import { Link as LK } from 'react-router-dom'
import "./Navbar.css";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav id='home' className="bg-gray-950 text-white p-1 shadow-md px-5 py-5">
        <div className="mx-auto px-2 sm:px-6 lg:px-10">
          <div className="relative flex items-center justify-between h-16">
            {/* Bouton Mobile */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:text-green-900 focus:outline-none focus:ring-1"
              >
                <span className="sr-only">Ouvrir le menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                    }
                  ></path>
                </svg>
              </button>
            </div>

            {/* Logo */}
            <div className="flex items-center ">
              <div className="flex-shrink-0 text-korobo text-3xl font-bold shadow-md">
                <Link to="/">Korobo</Link>
              </div>
            </div>

            {/* Liens Desktop */}
            <div className="hidden sm:block text-sm">
              <ul className='flex sm:flex sm:space-x-6'>
                <li> <Link to="home" smooth={true} duration={800} offset={-100} className='cursor-pointer'>Accueil</Link> </li>
                <li> <Link to="fonctionnalites" smooth={true} duration={800} offset={-100} className='cursor-pointer'>Fonctionnalités</Link> </li>
                <li> <Link to="a-propos" smooth={true} duration={800} offset={-100} className='cursor-pointer'>À Propos </Link></li>
                <li> <Link to="support-technique" smooth={true} duration={800} offset={-100} className='cursor-pointer'> Contact </Link></li>
                <li > <Link to="faq" smooth={true} duration={800} offset={-100} className='cursor-pointer lg:mr-25'> FAQ </Link></li>
                <li><LK
                  to="/sign-up"
                  className="button-korobo"
                  whileHover={{ scale: 1.01 }}
                >
                  Nouveau compte
                </LK></li>
                <li><LK
                  to="/login"
                  className="button-korobo"
                  whileHover={{ scale: 1.01 }}
                >
                  Connexion
                </LK>
                </li>

              </ul>
            </div>
          </div>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden bg-white p-4 shadow-lg"
            >
              <div className="flex flex-col space-y-3">
                <ul className='flex gap-10 text-md'>
                  <li> <Link to="/">Accueil</Link> </li>
                  <li> <Link to="/about-us">À Propos </Link></li>
                  <li> <Link to="/contact-us"> Contact </Link></li>
                  <li> <Link to="/faq"> FAQ </Link></li>
                  <li> <Link to="/faq"> Se connecter </Link></li>
                  <li> <Link to="/faq"> Créer un compte </Link></li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;