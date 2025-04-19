import React from 'react';
import Jean from "../../../assets/images/Testimonial_Profiles/Jean.jpg";
import Lucas from "../../../assets/images/Testimonial_Profiles/Lucas.jpg";
import Marie from  "../../../assets/images/Testimonial_Profiles/Marie.jpg"


const Testimonial = () => {
  const testimonials = [
    {
      name: "Jean Dupont",
      role: "Responsable Maintenance",
      text: "KOROBO a simplifié la gestion de nos maintenances photovoltaïques, avec des suivis efficaces et une interface claire.",
      imgSrc: Jean
    },
    {
      name: "Marie Durand",
      role: "Chef de Projet",
      text: "Une solution incroyable pour suivre nos installations solaires. L'interface est intuitive et le processus de maintenance est devenu beaucoup plus fluide.",
      imgSrc: Marie
    },
    {
      name: "Lucas Martin",
      role: "Technicien",
      text: "KOROBO nous aide à garder un œil sur toutes les opérations de maintenance. C'est un outil puissant pour optimiser notre temps.",
      imgSrc: Lucas
    }
  ];

  return (
    <section className="pb-30 bg-gray-900 ">
      <div className="max-w-7xl mx-auto text-center w-2/3">
        <h2 className="text-3xl font-semibold  mb-8">Témoignages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className=" p-6 rounded-lg ">
              <img
                src={testimonial.imgSrc}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-lg text-gray-700 mb-4">"{testimonial.text}"</p>
              <p className="text-sm font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
