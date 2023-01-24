import React from 'react';
import Card from './cards/card';
import JSON from './data.json';


const Projects = () => {

    const projects = JSON.projects;

    return ( 
        <div className="projects">
            <div className="project-header"><h1>all projects</h1></div>
            
            <div className="project-list">


                {projects && projects.length>0 && projects.map(project => (
                    <Card 
                        image={project.image}
                        repo={project.repo}
                        demo={project.demo}
                        minidesc={project.minidesc}
                        description={project.description}
                        id={project.id}
                        key={project.id}
                    />
                ))}

            </div>

        </div>
     );
}

export default Projects;




// fetching json data: https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app