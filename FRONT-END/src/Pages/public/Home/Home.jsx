import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
import Testimonial from '../../../Components/public/Testimonial/Testimonial';
import heroimage from '../../../assets/images/image.png'

export default function LandingPage() {
  return (
    <div className="bg-gray-950 text-white min-h-screen hero">

      {/* Hero Section */}
      <header id='home' className=" container mx-auto flex flex-col-reverse md:flex-row items-center p-20">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Simplifiez le suivi de vos installations photovoltaïques
          </h1>
          <p className="mt-6 text-gray-300">
            Korobo vous offre une solution intuitive pour planifier, suivre et gérer toutes vos interventions de maintenance.
          </p>
          <Link to="/sign-up">
            <button className="mt-8 px-6 py-3 rounded-2xl button-korobo transition ">
              Commencer maintenant
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          {/* Placeholder for hero image */}
          <div className="">
            <img src={heroimage} alt="" />
          </div>
        </div>
      </header>

      {/* Présentation Section */}
      <section id='fonctionnalites' className="container w-2/3 mx-auto py-20 px-10">
        <h2 className="text-3xl text-korobo font-bold text-center mb-12"> Fonctionnalités clés de l'application</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">🔧 Gestion des Sites</h3>
            <p className="text-gray-400">
              Gérez de manière centralisée tous vos sites photovoltaïques, avec des fiches complètes comprenant les détails techniques, le matériel installé, les types d’installation, les contacts d’urgence, ainsi que les informations relatives aux contrats de maintenance. Suivez chaque site avec précision pour une efficacité maximale.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">📅 Planification des Interventions</h3>
            <p className="text-gray-400">
              Planifiez vos interventions selon les spécificités de chaque contrat (trimestriel, sur demande, etc.) et assignez-les à vos techniciens disponibles. Grâce à une interface intuitive, vous pouvez visualiser et organiser toutes les opérations de maintenance, tout en conservant une trace claire des historiques d’intervention.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">🔔 Notifications en Temps Réel</h3>
            <p className="text-gray-400">
              Soyez informé instantanément des événements critiques grâce à un système de notifications en temps réel. Qu’il s’agisse d’une nouvelle intervention, d’une mise à jour du statut par un technicien ou d’un rappel pour une maintenance à venir, ne laissez passer aucun détail important.
            </p>
          </div>
        </div>
      </section>

      {/* Section A propos */}
      <section id='a-propos' className="bg-gray-900 text-white py-20 px-10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl text-korobo font-bold text-center mb-12">À propos de Korobo</h2>
          <p className="mb-6  text-gray-400 leading-relaxed">
            <strong>Korobo</strong> est bien plus qu'une simple application de gestion. Son nom, issu du dialecte Androy, signifie « stockage ». À l'origine associé à la conservation d’aliments précieux comme le lait ou le miel, il prend ici une nouvelle dimension : <strong>le stockage d’informations essentielles</strong>.
          </p>
          <p className="mb-6  text-gray-400 leading-relaxed">
            Pensée pour répondre aux besoins croissants de suivi et de maintenance dans le domaine des énergies renouvelables, <strong>Korobo</strong> a été conçue comme un espace sûr, structuré et intelligent où les données sont collectées, organisées et valorisées.
          </p>
          <p className="mb-6  text-gray-400 leading-relaxed border-l-2 p-5 bg-gray-800">
            <strong className=''>Notre mission ?</strong><br />
            Offrir aux entreprises solaires un outil fiable pour planifier, gérer et documenter leurs interventions techniques, afin de garantir la durabilité et la performance de chaque site photovoltaïque.
          </p>
          <p className=" text-gray-400 leading-relaxed">
            Ancrée dans les valeurs de rigueur, de transparence et d’innovation, <strong>Korobo</strong> accompagne la transition énergétique en rendant la technologie plus humaine, plus accessible et mieux organisée.
          </p>
        </div>
      </section>

      {/* Pourquoi Korobo */}
      <section id='pourquoi-korobo' className="bg-gray-900 text-white py-20 px-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl text-korobo font-bold text-center mb-12">Pourquoi choisir Korobo ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold mb-2">Sécurité des données</h3>
              <p className="text-gray-400">Vos informations sont stockées et protégées avec soin, pour garantir confidentialité et fiabilité.</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-2">Automatisation</h3>
              <p className="text-gray-400">Réduction des tâches manuelles grâce à une gestion intelligente des interventions et des notifications.</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">📲</div>
              <h3 className="text-xl font-semibold mb-2">Mobile Friendly</h3>
              <p className="text-gray-400">Conçu pour s’adapter à tous les appareils, Korobo vous suit partout, même sur le terrain.</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Vue d’ensemble</h3>
              <p className="text-gray-400">Un tableau de bord clair pour suivre toutes vos opérations en un coup d’œil.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <Testimonial />

      {/* Comment ça marche */}
      <section id='comment-ca-marche' className="bg-gray-950 text-white py-20 px-10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl text-korobo font-bold text-center mb-12">Comment ça marche ?</h2>
          <ol className="space-y-8 text-gray-300 text-lg">
            <li>
              <span className="text-korobo font-bold">1.</span> Créez votre compte entreprise en quelques clics.
            </li>
            <li>
              <span className="text-korobo font-bold">2.</span> Ajoutez vos sites, vos techniciens, et définissez vos contrats.
            </li>
            <li>
              <span className="text-korobo font-bold">3.</span> Planifiez vos interventions selon vos besoins.
            </li>
            <li>
              <span className="text-korobo font-bold">4.</span> Suivez en temps réel l’avancement des tâches sur le terrain.
            </li>
          </ol>
        </div>
      </section>


      {/* Rappel a l'action */}
      <section className="mb-5 py-16 px-10 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à simplifier la gestion de vos maintenances ?</h2>
          <p className="text-lg mb-8">Rejoignez Korobo dès aujourd’hui et passez à la vitesse supérieure.</p>
          <a href="/sign-up" className="inline-block button-korobo font-semibold px-6 py-3 rounded-full transition">Créer un compte maintenant</a>
        </div>
      </section>


      {/* Support technique */}
      <section id='support-technique' className=" text-white py-20 lg:flex gap-25 lg:px-50 p-10">
        <div className=" mx-auto max-w-3xl text-start lg:w-1/2">
          <h2 className="text-3xl text-korobo font-bold mb-6">Pour des supports techniques...</h2>
          <p className="text-lg text-gray-300 mb-8">
            Notre équipe est disponible pour vous accompagner à chaque étape. Que ce soit pour l’installation, l’utilisation ou la maintenance de votre compte Korobo, nous sommes là pour vous aider.
          </p>

          <div className="space-y-4 text-gray-400">
            <p><strong>Email :</strong> <a href="mailto:support@korobo.mg" className="text-gray-700 hover:underline">support@korobo.mg</a></p>
            <p><strong>Téléphone :</strong> <a href="tel:+261123456789" className="text-gray-700 hover:underline">+261 12 345 6789</a></p>
            <p><strong>Horaires :</strong> Lundi - Vendredi, 8h à 17h</p>
          </div>
        </div>
        <div className=" mx-auto lg:w-1/2">
          <h5 className="text-xl font-bold text-gray-500 text-start mb-12">Contactez-nous</h5>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label for="name" className="mb-2 text-sm text-gray-400">Nom</label>
              <input type="text" id="name" name="name" placeholder="Votre nom" className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div className="flex flex-col">
              <label for="email" className="mb-2 text-sm text-gray-400">Email</label>
              <input type="email" id="email" name="email" placeholder="Votre adresse email" className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div className="md:col-span-2 flex flex-col">
              <label for="message" className="mb-2 text-sm text-gray-400">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Écrivez-nous un message..." className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>

            <div className="md:col-span-2 text-start">
              <button type="submit" className="px-6 py-3 rounded-full button-korobo transition font-semibold">
                Envoyer le message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Faq */}
      {/* <section className="bg-gray-900 text-white py-20 px-4">
  <div className="container mx-auto max-w-4xl">
    <h2 className="text-3xl font-bold text-center mb-12">Foire aux questions</h2>

    <div className="space-y-4 w-2/3 m-auto">
      <details className="bg-gray-800 p-4 rounded-xl shadow-lg">
        <summary className="cursor-pointer  font-semibold text-korobo">Est-ce que Korobo fonctionne hors ligne ?</summary>
        <p className="mt-2 text-gray-300">Actuellement, Korobo nécessite une connexion internet pour accéder aux données en temps réel. Une version partiellement utilisable hors ligne est prévue dans les futures mises à jour.</p>
      </details>

      <details className="bg-gray-800 p-4 rounded-xl shadow-lg">
        <summary className="cursor-pointer  font-semibold text-korobo">Puis-je ajouter plusieurs techniciens dans un même compte entreprise ?</summary>
        <p className="mt-2 text-gray-300">Oui, un administrateur peut créer plusieurs comptes techniciens et leur assigner des interventions selon leurs disponibilités.</p>
      </details>

      <details className="bg-gray-800 p-4 rounded-xl shadow-lg">
        <summary className="cursor-pointer  font-semibold text-korobo">Mes données sont-elles sécurisées ?</summary>
        <p className="mt-2 text-gray-300">Toutes les données sont stockées de manière sécurisée et confidentielle. Nous utilisons des pratiques de sécurité modernes pour garantir leur protection.</p>
      </details>

      <details className="bg-gray-800 p-4 rounded-xl shadow-lg">
        <summary className="cursor-pointer  font-semibold text-korobo">Puis-je tester Korobo gratuitement ?</summary>
        <p className="mt-2 text-gray-300">Une version de démonstration est disponible sur demande pour permettre aux entreprises de tester la plateforme avant de s’engager.</p>
      </details>
    </div>
  </div>
</section> */}



    </div>
  );
}
