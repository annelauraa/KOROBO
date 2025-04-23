import React from 'react';
import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { GoXCircleFill } from 'react-icons/go';
import { signup } from '../../services/authService';
import ErrorMessage from '../../Components/errors/ErrorMessage';
const SignUp = () => {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorShakeTrigger, setErrorShakeTrigger] = useState(0);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
    telephone: "",
    adresse: "",
  });

  const [errors, setErrors] = useState({
    companyName: false,
    email: false,
    password: false,
    emailInvalid: false,
    passwordLength: false,
    telephone: false,
    // passwordDigit: false,
    // passwordLetter: false,
    // passwordSpecial: false,
    // passwordMatch: false,  
  });

  const [showPassword, setShowPassword] = useState(false); // État pour gérer la visibilité du mot de passe

  const handleSubmit = async (e) => {
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
      setIsLoading(true);

      try {
          await signup({
            nom: formData.companyName,
            email: formData.email,
            mot_de_passe: formData.password,
            telephone: formData.telephone,
            adresse: (formData.adresse).length ? formData.adresse : "Non renseigné",
            logo: "Non renseigné",
          });

          navigate("/verify-account");
          setError(null);

      } catch (error) {

          console.error(error);
          if (error.response && error.response.data && error.response.data.message) {
            setError(error.response.data.message); // 👈 affiche le message d'erreur du backend
            setErrorShakeTrigger(prev => prev + 1); // 🔁 relance l'animation
          } else {
            setError("Une erreur est survenue lors de la création de l’entreprise.");
          }

      } finally {
          setIsLoading(false);
      }  
      console.log("Formulaire soumis avec succès");
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
        <div className='flex flex-row items-center justify-between'>
          <h2 className="text-2xl font-bold text-start text-gray-700">
            Créer un compte
          </h2>
          <Link to="/" className=''><GoXCircleFill /></Link>
        </div>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Message d'erreur */}
          {error && (
            <ErrorMessage message={error} errorShakeTrigger={errorShakeTrigger} />
          )}

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
              Nom de l’entreprise <span className='text-orange-600'>*</span>
            </label>
            <input
              id="company-name"
              name="companyName"
              type="text"
              value={formData.companyName}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border rounded-md sm:text-sm ${error || errors.companyName ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.companyName && (
              <span className="text-red-500 text-sm">Ce champ est requis</span>
            )}
          </motion.div>

          {/* Adresse de l'entreprise */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label
              htmlFor="company-address"
              className="block text-sm font-medium text-gray-700"
            >
              Adresse de l’entreprise
            </label>
            <input
              id="company-adress"
              name="companyAdress"
              type="text"
              value={formData.companyAdress}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border rounded-md sm:text-sm border-gray-300
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
          </motion.div>

          {/* Telephone*/}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label
              htmlFor="telephone"
              className="block text-sm font-medium text-gray-700"
            >
              Numéro de téléphone <span className='text-orange-600'>*</span>
            </label>
            <input
              id="telephone"
              name="telephone"
              type="text"
              value={formData.telephone}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border rounded-md sm:text-sm ${errors.telephone ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.telephone && !formData.telephone && (
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
              Adresse e-mail <span className='text-orange-600'>*</span>
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
              Mot de passe <span className='text-orange-600'>*</span>
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
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 justify-end"
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
            disabled={isLoading}
            className={`rounded-3xl w-full justify-center items-center transition-all duration-300 ${isLoading ? 'bg-gray-400 cursor-not-allowed flex p-3 border-none text-white' : 'button-korobo'
              }`}
          >
            {isLoading && (
              <svg class="mr-3 -ml-1 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            )}
            {isLoading ? "Chargement..." : "Créer un compte"}

          </motion.button>
          <span className="block text-sm font-medium text-gray-900">Si vous avez déjà un compte alors, <Link className="text-korobo" to="/login">Cliquez ici</Link></span>
        </form>

      </motion.div>
    </div>
  );
};

export default SignUp;