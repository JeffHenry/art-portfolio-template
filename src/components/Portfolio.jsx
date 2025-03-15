import React, { useState } from "react";
import CardWindow from "./CardWindow";
import placeholderArt from "../assets/artwork/placeholder.jpg";

const projects = [
  {
    id: 1,
    title: "Art One",
    description: "A brief description of Project One",
    image: placeholderArt,
    year: "2025",
    name: "Your Name",
    medium: "Oil on Canvas",
  },
  {
    id: 2,
    title: "Art Two",
    description: "A brief description of Project Two",
    image: placeholderArt,
    year: "2025",
    name: "Your Name",
    medium: "Oil on Canvas",
  },
  {
    id: 3,
    title: "Art Three",
    description: "A brief description of Project Three",
    image: placeholderArt,
    year: "2025",
    name: "Your Name",
    medium: "Oil on Canvas",
  },
  {
    id: 4,
    title: "Art Four",
    description: "A brief description of Project Four",
    image: placeholderArt,
    year: "2025",
    name: "Your Name",
    medium: "Oil on Canvas",
  },
  {
    id: 5,
    title: "Art Five",
    description: "A brief description of Project Four",
    image: placeholderArt,
    year: "2025",
    name: "Your Name",
    medium: "Oil on Canvas",
  },
  {
    id: 6,
    title: "Art Six",
    description: "A brief description of Project Four",
    image: placeholderArt,
    year: "2025",
    name: "Your Name",
    medium: "Oil on Canvas",
  },
  {
    id: 6,
    title: "Art Seven",
    description: "A brief description of Project Four",
    image: placeholderArt,
    year: "2024",
    name: "Your Name",
    medium: "Procreate",
  },
];

export default function Portfolio() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openCard = (project) => {
    setSelectedProject(project);
    setIsCardOpen(true);
  };

  const closeCard = () => {
    setIsCardOpen(false);
    setSelectedProject(null);
  };
  return (
    <section id="portfolio" className="pt-24 px-8 bg-white h-screen">
      <div className="bg-white py-16 px-8">
        <h1 className="text-3xl font-bold mb-8 text-center">My Works</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full px-4 items-center text-center">
            {projects.map((project, index) => (
              <div
              key={index}
              className="cursor-pointer relative group"
              onClick={() => openCard(project)}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-md transition-opacity duration-300 group-hover:opacity-70"
              />
            
              {/* Text Overlay */}
              <div className="absolute inset-0 flex justify-center items-center bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-grey-800 text-center p-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm">{project.medium}</p>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>

        {isCardOpen && selectedProject && (
          <CardWindow project={selectedProject} closeCard={closeCard} />
        )}
      </div>
    </section>
  );
}
