/* Import each project here */
import passersby1 from "./passersby.jpeg";
import passersby2 from "./passersby2.jpeg";

export default function ProjectsData() {

    const projectsObjs = {

        project1: {
            picture: passersby1,
            title: 'TitleOne',
            tags: '#tag1',
            description: '“Passers By” is an interactive public installation allowing passers-by to connect with cold,unwelcoming spaces, temporarily emerge from the unstoppable stream of thought and feel comfort."Encouraging observation" is the motivation behind the project as we believe that lack of curiosity, in part, increases levels of stress and loneliness in the city dwellers. Passers By is an attempt to use technology not as an informational (spoken word) weapon but rather as a tool to generate emotion, empathy. As a secondary task we hope that the piece can contribute to establishing non-verbal dialogue where space can become the connecting intermediary between strangers.'
        },
        project2: {
            picture: passersby2,
            title: 'TitleTwo',
            tags: '#TagTwo',
            description: '“Passers By” is an interactive public installation allowing passers-by to connect with cold,unwelcoming spaces, temporarily emerge from the unstoppable stream of thought and feel comfort."Encouraging observation" is the motivation behind the project as we believe that lack of curiosity, in part, increases levels of stress and loneliness in the city dwellers. Passers By is an attempt to use technology not as an informational (spoken word) weapon but rather as a tool to generate emotion, empathy. As a secondary task we hope that the piece can contribute to establishing non-verbal dialogue where space can become the connecting intermediary between strangers.'

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

