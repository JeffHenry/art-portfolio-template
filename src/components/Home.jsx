import React from "react";
import profilePic from "../assets/profile-pic.jpg";

export default function Home() {
  return (
    <section
      id="home"
      className="pt-24 flex items-center justify-center py-20 h-screen"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left Side - Photo */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={profilePic}
            alt="Profile"
            className="w-80 h-80 object-cover rounded-full shadow-md"
          />
        </div>

        {/* Right Side - Text Summary */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 text-center md:text-left">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            Hi, I'm Your Name
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
            debitis maiores aspernatur eius, adipisci dolorum accusantium
            recusandae iusto! Fuga voluptatibus repudiandae nisi tenetur,
            quaerat sed veritatis aut iste esse nesciunt.
          </p>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui alias
            atque, quidem dolores assumenda debitis impedit accusantium unde ut
            exercitationem nam numquam rem, iste tempore laboriosam vero
            voluptatem rerum cupiditate.
          </p>
        </div>
      </div>
    </section>
  );
}
