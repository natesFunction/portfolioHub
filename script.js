function displayProject(projectId){
    const projectDetails = {
        'project1': {
            title: 'Portfolio Hub',
            description: "This web application represents my inaugural project and serves as a gateway to my growing portfolio of professional IT projects. It showcases a variety of applications and systems I've developed or contributed to, highlighting my proficiency in IT management, database support, and system coordination. It also reflects my dedication to enhancing operational efficiency and my capability to implement and utilize IT infrastructures.",
            technologies: "HTML, CSS, JavaScript",
            challenges: "Implementing responsive design.  Implementing visually appealing design.",
            results: "Successfully created a user-friendly portfolio site that improved project visibility and professional outreach.",
            role: "Lead Developer and Designer",
            contributions: "Designed the UI/UX, developed the front-end and back-end, and deployed the application.",
            learningOutcomes: "Gained proficiency in program development and deepened understanding of web deployment processes.",
            codeRepo: "https://github.com/myusername/portfolio-hub"
        },

        
    };
    
    const project = projectDetails[projectId];
    if (project) {
        document.getElementById('projectDetails').innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p><strong>Technologies Used:</strong> ${project.technologies}</p>
            <p><strong>Challenges Overcome:</strong> ${project.challenges}</p>
            <p><strong>Results and Impact:</strong> ${project.results}</p>
            <p><strong>Contributions:</strong> ${project.contributions}</p>
            <p><strong>Learning Outcomes:</strong> ${project.learningOutcomes}</p>
            <p><strong>Code Repository:</strong> <button><a href="${project.codeRepo}" target="_blank">View Code</a></p></button>
            `;

    }
}