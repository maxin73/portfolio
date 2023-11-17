"use client";
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    id: 1,
    title: "E-commerce Website [Store]",
    description: "E-commerce application for customers.",
    image: "/images/projects/Ecommerce_store.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/maxin73/Program_Project-Ecommerce-Store",
    previewUrl:"https://program-project-ecommerce-store.vercel.app/",
  },
  {
    id: 2,
    title: "E-commerce Website [Admin]",
    description: "E-commerce application for store manegers.",
    image: "/images/projects/Ecommerce_admin.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/maxin73/Program_Project-Ecommerce-Admin",
    previewUrl:"https://program-project-ecommerce-admin.vercel.app/",
  },
  {
    id: 3,
    title: "Airbnb clone",
    description: "Airbnb clone website",
    image: "/images/projects/Airbnb_clone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/maxin73/AirbnbClone_MERN",
    previewUrl:"https://nami-booking-app.vercel.app/",
  },
  {
    id: 4,
    title: "Hotel Booking Website",
    description: "Booking website",
    image: "/images/projects/HotelBooking.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/maxin73/Program_Project_Hotel_Frontend",
    previewUrl:"https://program-project-hotel-frontend.vercel.app/",
  }
]


const ProjectSection = () => {
  return (
    <section id="projects">
      <h2 className="text-4xl font-bold mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div>{projectData.map((project) => (
        <ProjectCard 
          key={project.id} 
          title={project.title} 
          description={project.description}
          imgUrl={project.image}
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl}
        />
        ))}
      </div>
    </section>
  )
}

export default ProjectSection