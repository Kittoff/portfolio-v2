import React from "react";

const ContentSection = ({
  bgColor,
  offset,
  imgSrc,
  title,
  text,
  id,
  subtitle,
}) => (
  <div
    className={`sticky top-0 flex h-screen flex-col content-center items-center justify-center ${bgColor}`}
    style={{ top: offset }}
  >
    {/* <img className="w-[160%] justify-self-end" src={imgSrc} alt={title} /> */}
    <h2 className="max-w-[500px] text-[clamp(2rem,6vw,5rem)] font-normal uppercase leading-none tracking-tighter">
      <sup>{id}</sup> {title}
    </h2>
    <h4 className="text-center text-step_p__1">{subtitle}</h4>
    <p className="backface-hidden max-w-[950px] p-6 text-left text-step_p_3 leading-normal">
      {text}
    </p>
  </div>
);

const Experience = () => {
  const sections = [
    {
      bgColor: "bg-[#dfd6cf]",
      id: "01",
      offset: "0rem",
      imgSrc: "img/1.png",
      title: "XDog",
      subtitle:
        "Serveur Multi Mission Coverage Management pour Pléiades / Astroterra Et les futurs satellites d’observation de la terre.",
      text: "Conceptualiser et intégrer une interface afin de récupérer des données d'images satellites dans une zone définie par l'utilisateur.",
    },
    {
      bgColor: "bg-[#c5c3c0]",
      id: "02",
      offset: "2rem",
      imgSrc: "img/2.png",
      title: "Walk",
      subtitle: "gestion de maintenance moteur Safran",
      text: "Conceptualiser et intégrer un outil de maintenance de moteurs d'avions à destination des techniciens.",
    },
    {
      bgColor: "bg-[#dfd6cf]",
      id: "03",
      offset: "4rem",
      imgSrc: "img/3.png",
      title: "MyCM",
      subtitle: "Gestion humaine",
      text: "Une grande entreprise a besoin d'outil afin de gérer au mieux les relations humaines entre collaborateurs. je me suis occupé de l'intégration de la logique métier à destination des services RH.",
    },
    {
      bgColor: "bg-[#c5c3c0]",
      id: "04",
      offset: "6rem",
      imgSrc: "img/4.png",
      title: "Skywise",
      subtitle: "gestion de flote aéronautique",
      text: "Intégration de nouvelles interfaces à partie de maquettes UI/UX à destination des compagnie aériennes afin de gérer au mieux la maintenance de leurs avions.",
    },
    {
      bgColor: "bg-[#dfd6cf]",
      id: "05",
      offset: "8rem",
      imgSrc: "img/5.png",
      title: "Mars2020",
      subtitle: "interface utilisateur pour mission Perseverance sur Mars",
      text: "Implémentation de nouvelles interfaces à destination des scientifiques du CNES et de la NASA afin d'envoyer des ordres de missions au robot Perseverance, présent sur Mars.",
    },
  ];

  return (
    <div className="wrap bg-red-300">
      {sections.map((section, index) => (
        <ContentSection key={index} {...section} />
      ))}
    </div>
  );
};

export default Experience;