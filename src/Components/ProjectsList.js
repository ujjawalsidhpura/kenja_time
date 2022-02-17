import EachProject from "./EachProject";
import ProjectsData from "../Data/Projects/ProjectsData";

export default function Projects() {

    const allProjects = ProjectsData();

    const parsedProjects = allProjects.map(project =>
        <EachProject project={project} />
    )

    return (
        <ul>
            {parsedProjects}
        </ul>
    )
}