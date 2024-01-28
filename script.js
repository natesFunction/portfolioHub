const projectDetails = {
    'project1': {
        title: 'Portfolio Hub',
        description: "This web application represents my inaugural project and serves as a gateway to my growing portfolio of professional IT projects. It showcases a variety of applications and systems I've developed or contributed to, highlighting my proficiency in IT management, database support, and system coordination. It also reflects my dedication to enhancing operational efficiency and my capability to implement and utilize IT infrastructures.",
        technologies: "HTML, CSS, JavaScript",
        challenges: "Implementing responsive design. Implementing visually appealing design.",
        results: "Successfully created a user-friendly portfolio site that improved project visibility and professional outreach.",
        role: "Lead Developer and Designer",
        contributions: "Designed the UI/UX, developed the front-end and back-end, and deployed the application.",
        learningOutcomes: "Gained proficiency in program development and deepened understanding of web deployment processes.",
        codeRepo: "https://github.com/natesFunction/portfolioHub"
    },
    'project2': {
        title: 'Domain Setup Journey',
        description: "This project encapsulates my experience of purchasing and setting up a custom domain for my portfolio. It demonstrates the challenges and learnings in domain management and website hosting.",
        technologies: "Domain Management, GitHub Pages",
        challenges: "Navigating domain purchase, setting up SSL certificates, resolving HTTPS errors. The entire process was a challenging yet enriching first-time experience.",
        results: "Successfully hosted my portfolio on a custom domain with secure HTTPS.",
        role: "Project Lead",
        contributions: "Acquired the domain, linked it to GitHub Pages, and ensured secure, reliable hosting.",
        learningOutcomes: "Gained valuable insights into domain registration, DNS management, and the intricacies of web hosting.",
        instructions: `<ol>
            <li>Set Up GitHub Repository with a GitHub Pages site.</li>
            <li>Acquire Domain Name from Namecheap.</li>
            <li>Configure GitHub Repository to use the custom domain in the 'Pages' settings.</li>
            <li>Update Namecheap DNS Settings: Add A records pointing to GitHub IPs and a CNAME record for 'www' to your GitHub username.github.io.</li>
            <li>Enable HTTPS on GitHub Pages after DNS changes propagate.</li>
        </ol>`,
        source: "https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages/"
    },
    // add more projects here
};

function displayProject(projectId) {
    const project = projectDetails[projectId];
    if (project) {
        let projectHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;

        const detailFields = [
            { label: 'Technologies Used', key: 'technologies' },
            { label: 'Challenges Overcome', key: 'challenges' },
            { label: 'Results and Impact', key: 'results' },
            { label: 'Role', key: 'role' },
            { label: 'Contributions', key: 'contributions' },
            { label: 'Learning Outcomes', key: 'learningOutcomes' },
            { label: 'Instructions', key: 'instructions' },
            { label: 'Code Repository', key: 'codeRepo' },
            { label: 'Source', key: 'source' }
        ];

        detailFields.forEach(detail => {
            if (project[detail.key]) {
                if (detail.key === 'codeRepo' || detail.key === 'source') {
                    projectHTML += `<p><strong>${detail.label}:</strong> <a href="${project[detail.key]}" target="_blank">Link</a></p>`;
                } else if (detail.key === 'instructions') {
                    projectHTML += `<p><strong>${detail.label}:</strong> ${project[detail.key]}</p>`;
                } else {
                    projectHTML += `<p><strong>${detail.label}:</strong> ${project[detail.key]}</p>`;
                }
            }
        });

        document.getElementById('projectDetails').innerHTML = projectHTML;
    }
}
