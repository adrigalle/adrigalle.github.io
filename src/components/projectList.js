// it will receive the projects and title from the projects component and it will iterate through all of the projects
import { Link } from 'react-router-dom';

const ProjectList = ({projects, title}) => {

    console.log({projects});
    const projs = [...projects];
    console.log(projs);
    
    return ( 
        <div>
            <div className="project-header"><h1>{title}</h1></div>

            <div className="project-list">

                {projects.map(project => (
                    <div className="project-preview" key={project.title}>
                        <Link to={`/projects/${project.title}`}>
                            <h2>{project.title}</h2>
                            <p>Written by {project.author}</p>
                        </Link>
                    </div>
                ))}

            </div>

        </div>
     );
}
 
export default ProjectList;