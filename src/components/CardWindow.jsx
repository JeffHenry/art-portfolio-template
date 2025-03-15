import React from "react";

export default function CardWindow({ project, closeCard }) {
  return (
    <div
      className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
      onClick={closeCard} // Close when clicking outside the card window
    >
      <div
        className="bg-white p-8 w-full md:w-3/4 max-w-4xl shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent the click from closing the card when inside
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto mb-8"
        />
        <h1 className="text-3xl font-bold mb-2">{project.name}</h1>
        <p className="text-xl">{project.title}{" "}<span className="font-light">{project.year}</span></p>
        <p className="text-md mb-4">{project.medium}</p>
        <p className="text-lg">{project.description}</p>
      </div>
    </div>
  );
}
