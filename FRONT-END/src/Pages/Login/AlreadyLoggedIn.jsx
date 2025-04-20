// AlreadyLoggedIn.jsx
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../utils/auth";

function AlreadyLoggedIn() {

  const navigate = useNavigate();
  const [counter, setCounter] = useState(10);

  // Redirection vers le tableau de bord après 10 secondes
  const updateCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      navigate("/dashboard");
    }
  }
  setTimeout(updateCounter, 1000);

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Vous êtes déjà connecté !</h2>
        <p className="text-gray-700 mb-6">Redirection vers votre espace admin dans {counter}s...</p>
        <Link to="/dashboard" className="text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700">
          Aller au tableau de bord
        </Link>
        <div className="my-4 flex justify-center items-center flex-row gap-1">
          <hr className="w-25 mt-1" />ou<hr className="w-25 mt-1" />
        </div>
        <Link to="/logout" className="text-red-600 hover:underline mt-2">
          Se déconnecter
        </Link>
      </div>
    </div>
  );
}

export default AlreadyLoggedIn;
