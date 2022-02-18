/* Import each project here */
import passersby1 from "./passersby.jpeg";
import passersby2 from "./passersby2.jpeg";

export default function ProjectsData() {

    const projectsObjs = {

        project1: {
            picture: passersby1,
            title: 'TitleOne',
            tags: '#tag1',
        },
        project2: {
            picture: passersby2,
            title: 'dfgsdfghdg',
            tags: '#dfgdfgdsfgsd'
        },
        /* Extra projects go here */
    }


    /* Do not alter this */

    let output = [];
    for (let eachProject in projectsObjs) {
        output.push(projectsObjs[eachProject])
    }

    return output;
}

