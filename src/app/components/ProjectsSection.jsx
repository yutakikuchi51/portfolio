import React from 'react'
import ProjectCard from './ProjectCard'

const projectData = [
    {
        id: 1,
        title: "PharmaGrades",
        description: "A web-based application that provides a grading system for students' lab work, specifically designed for the instructors of the Pharmacy Assistant program at SAIT",
        image: "/images/pharmagrades.png",
        tag: ["All", "web"],
        gitUrl: "https://github.com/ahmadhmi/pharmacy-assistant",
        previewUrl: "https://pharmagrades.vercel.app/"
    },
    {
        id: 2,
        title: "Flix Discover",
        description: "A web application that fetches data from a movie API and allows users to browse different movies",
        image: "/images/flix-discover.png",
        tag: ["All", "web"],
        gitUrl: "https://github.com/yutakikuchi51/flix-discover",
        previewUrl: "https://flix-discover.vercel.app/"
    }
]

const ProjectsSection = () => {
    return (
        <>
            <h2 className='text-center text-4xl font-bold text-[#2c2319] mt-4 mb-8 md:mb-12'>
                My Projects
            </h2>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>{projectData.map((project) => (
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
        </>
    )
}

export default ProjectsSection;