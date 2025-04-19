import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll"
import './Footer.css';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter  } from "react-icons/ti";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-6">
  <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-8">
    
    {/* Logo + Description */}
    <div>
      <h3 className="text-2xl font-bold text-korobo mb-4">Korobo</h3>
      <p className="text-gray-400 text-sm">
        Simplifiez la gestion de vos maintenances photovoltaïques grâce à une plateforme intelligente, sécurisée et intuitive.
      </p>
    </div>

    {/* Navigation */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Navigation</h4>
      <ul className="space-y-2 text-sm text-gray-400">
        <li> <Link to="home" smooth={true} duration={800} offset={-100} className="hover:text-korobo transition cursor-pointer">Accueil</Link></li>
        <li><Link to="fonctionnalites" smooth={true} duration={800} offset={-100} className="hover:text-korobo transition cursor-pointer">Fonctionnalités</Link></li>
        <li><Link to="a-propos" smooth={true} duration={800} offset={-100} className="hover:text-korobo transition cursor-pointer">À propos</Link></li>
        <li><Link to="pourquoi-korobo" smooth={true} duration={800} offset={-100} className="hover:text-korobo transition cursor-pointer">Pourquoi Korobo ?</Link></li>
        <li><Link to="comment-ca-marche" smooth={true} duration={800} offset={-100} className="hover:text-korobo transition cursor-pointer">Comment ça marche</Link></li>
        <li><Link to="support-technique" smooth={true} duration={800} offset={-100} className="hover:text-korobo transition cursor-pointer">Support technique</Link></li>
      </ul>
    </div>

    {/* Contact rapide */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Contact</h4>
      <ul className="text-sm text-gray-400 space-y-2">
        <li>Email : <a href="mailto:support@korobo.mg" className="hover:text-korobo">support@korobo.mg</a></li>
        <li>Tél : <a href="tel:+261123456789" className="hover:text-korobo">+261 12 345 6789</a></li>
        <li>Heures : Lundi - Vendredi, 8h à 17h</li>
      </ul>
    </div>

    {/* Reseaux sociaux ou lien entreprise */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
      <div className="flex space-x-2 text-korobo text-xl ">
        <a href="#" aria-label="LinkedIn"><TiSocialLinkedin /></a>
        <a href="#" aria-label="Facebook"><TiSocialFacebook /></a>
        <a href="#" aria-label="Twitter"><TiSocialTwitter /></a>
        <a href="#" aria-label="Whatsapp"><FaWhatsapp /></a>
        
      </div>
    </div>
  </div>

  <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
    &copy; {new Date().getFullYear()} Korobo. Tous droits réservés.
  </div>
</footer>

    );
};

export default Footer;