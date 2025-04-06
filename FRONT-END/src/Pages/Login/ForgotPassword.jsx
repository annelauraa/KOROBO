import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function ForgotPassword() {
  const [formData, setFormData] = useState({
      email: "",
    });
  
    const [errors, setErrors] = useState({
      email: false,
      emailInvalid: false,
  
    });

    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newErrors = {
        email: !formData.email,
        emailInvalid: formData.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email),
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


  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-8 rounded-lg shadow-md max-w-md w-full"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Mot de passe oublié
        </h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className=" w-full button-korobo transition-all duration-300"
          >
            Envoyer le code de réinitialisation
          </motion.button>
          <span className="block text-sm font-medium text-gray-900 text-start"><Link className="text-korobo" to="/login">Se connecter </Link></span>
        </form>
            <button className='text-sm bg-gray-200 mt-5 p-1.5 rounded-sm text-gray-500 flex flex-row hover:scale-105 float-end'> <Link to="/" className='flex flex-row items-center'>Annuler</Link></button>
      </motion.div>
      
    </div>
  );
}

export default ForgotPassword;
