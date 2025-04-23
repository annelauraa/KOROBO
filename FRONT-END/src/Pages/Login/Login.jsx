import React, { useEffect } from 'react';
import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosEye, IoIosEyeOff, IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import { isAuthenticated } from '../../utils/auth';
import { GoXCircleFill } from "react-icons/go";
import { VscError } from "react-icons/vsc";
import { login } from '../../services/authService';
import ErrorMessage from '../../Components/errors/ErrorMessage';

const Login = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    emailInvalid: false,
    // passwordLength: false,
    // passwordDigit: false,
    // passwordLetter: false,
    // passwordSpecial: false,
  });
  const [errorShakeTrigger, setErrorShakeTrigger] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      email: !formData.email,
      password: !formData.password,
      emailInvalid: formData.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email),
    };

    setErrors(newErrors);

    // Si aucune erreur, soumettre le formulaire

    if (!Object.values(newErrors).includes(true)) {
      setIsLoading(true);
      try {
        await login({
          email: formData.email,
          mot_de_passe: formData.password,
        });

        window.location.href = "/dashboard";

      } catch (errMsg) {
        setError(errMsg);
        setErrorShakeTrigger(prev => prev + 1);
      } finally {
        setIsLoading(false);
      }

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

  useEffect(() => {
    if (isAuthenticated()) {
      // Redirection automatique vers une page d'alerte si déjà connecté
      navigate("/already-logged-in");
    }
  }, [navigate]);


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
            Connexion
          </h2>
          <Link to="/" className=''><GoXCircleFill /></Link>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {error && (
            <ErrorMessage message={error} errorShakeTrigger={errorShakeTrigger} />
          )}
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
            // required
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
            {isLoading ? "Chargement..." : "Se connecter"}

          </motion.button>
          <span className="block text-sm font-medium text-gray-900 text-start"><Link className="text-korobo" to="/forgot-password">Mot de passe oublié ?</Link></span>
          <span className="block text-sm font-medium text-gray-900 text-start"><Link className="text-korobo" to="/sign-up">Cliquez ici</Link> si vous n&apos;avez pas encore votre compte. </span>
        </form>

      </motion.div>
    </div>
  );
};

export default Login;