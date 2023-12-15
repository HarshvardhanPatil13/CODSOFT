document.addEventListener('DOMContentLoaded', function () {
    // Dynamic data
    const skillsData = ['Programming Languages : C++, Java, Python', 'Web Development : HTML, CSS, JavaScript', 'Data Structures and Algorithms', 'Database Management : MySQL', 'Version Control : Git'];

    const projectsData = [
	 {
            title: 'Android Healthcare App ',
            description: 'Designed to provide users with a range of health-related features and services directly on their Android devices. These apps aim to enhance users well-being, promote healthy habits, and facilitate access to healthcare resources. ',
            image: 'carepoint.jpeg'
        },
        {
            title: 'Online Bookstore Website',
            description: 'Developed a responsive website for an online bookstore using HTML, CSS, and JavaScript. Implemented user authentication and integrated a backend server for handling transactions.',
            image: 'bookst.jpg'
        },
	{
            title: 'Online Airport Ticket Booking System ',
            description: 'An Online Airport Ticket Booking System implemented in Java is a robust and scalable web application designed to facilitate the seamless booking of airline tickets for travelers.',
            image: 'air.png'
        },
        {
            title: 'Algorithm Visualizer',
            description: 'Created an algorithm visualizer using Python and Tkinter. Visualized sorting algorithms such as Bubble Sort and Quick Sort to enhance understanding of algorithmic concepts.',
            image: 'algo.png'
        }
    ];

    // Display skills
    const skillsList = document.getElementById('skills-list');
    skillsData.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });

    // Display projects
    const projectsList = document.getElementById('projects-list');
    projectsData.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <img src="${project.image}" alt="${project.title}"  align="center" width="200" height="100" style="float:top">
        `;
        projectsList.appendChild(projectDiv);
    });
});
