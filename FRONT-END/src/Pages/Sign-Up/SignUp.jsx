import React from 'react';
import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link } from 'react-router-dom';
import './SignUp.css'
const SignUp = () => {

    const [formData, setFormData] = useState({
        companyName: "",
        email: "",
        password: "",
    });
    
    const [errors, setErrors] = useState({
        companyName: false,
        email: false,
        password: false,
        emailInvalid: false,
        passwordLength: false,
    });
    
    const [showPassword, setShowPassword] = useState(false); // État pour gérer la visibilité du mot de passe
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Validation des champs requis
        const newErrors = {
          companyName: !formData.companyName,
          email: !formData.email,
          password: !formData.password,
          emailInvalid: formData.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email),
          passwordLength: formData.password.length < 6,
        };
    
        setErrors(newErrors);
    
        // Si aucune erreur, soumettre le formulaire
        if (!Object.values(newErrors).includes(true)) {
          console.log("Formulaire soumis avec succès");
          // Logic de soumission du formulaire ici (création de compte)
        }
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
    
        // Si l'utilisateur modifie le champ, retirer l'erreur associée
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: false,
          emailInvalid: false,
        }));
    
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };
    
    // Fonction pour basculer la visibilité du mot de passe
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white p-8 rounded-lg shadow-md max-w-md w-full"
        >
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Créer un compte
          </h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Nom de l'entreprise */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label
                htmlFor="company-name"
                className="block text-sm font-medium text-gray-700"
              >
                Nom de l’entreprise
              </label>
              <input
                id="company-name"
                name="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md sm:text-sm ${errors.companyName ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {errors.companyName && (
                <span className="text-red-500 text-sm">Ce champ est requis</span>
              )}
            </motion.div>
  
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Adresse e-mail
              </label>
              <input
                id="email"
                name="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md sm:text-sm ${errors.email ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {errors.email && !formData.email && (
                <span className="text-red-500 text-sm">Ce champ est requis</span>
              )}
              {errors.emailInvalid && formData.email && (
                <span className="text-red-500 text-sm">
                  Le format de l&apos;e-mail est invalide
                </span>
              )}
            </motion.div>
  
            {/* Mot de passe */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Mot de passe
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"} // Si showPassword est true, le type devient "text"
                  value={formData.password}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border rounded-md sm:text-sm ${errors.password ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                >
                  {showPassword ? (
                    <IoIosEye />
                  ) : (
                    <IoIosEyeOff />
                  )}
                </button>
              </div>
              {errors.password && (
                <span className="text-red-500 text-sm">Ce champ est requis<br /></span>
              )}
              {errors.passwordLength && (
                <span className="text-red-500 text-sm">
                  Le mot de passe doit contenir au moins 6 caractères
                </span>
              )}
            </motion.div>
  
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.9 }}
              className="w-full button-korobo transition-all duration-300"
            >
              Créer un compte
            </motion.button>
            <span className="block text-sm font-medium text-gray-900">Si vous avez déjà un compte alors, <Link className="text-korobo" to="/login">Cliquez ici</Link></span>
          </form>
              <button className='text-sm bg-gray-200 mt-5 p-1.5 rounded-sm text-gray-500 flex flex-row hover:scale-105 float-end'> <Link to="/" className='flex flex-row items-center'>Annuler</Link></button>
        </motion.div>
      </div>
    );
};

export default SignUp;