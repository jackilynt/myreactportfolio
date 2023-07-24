import React from "react";

const projects = [
    {
        id: 1,
        name: 'Pet Adoption',
        text: 'Search pets available for adoption website',
        technologies: 'JavaScript, HTML, CSS',
        deployed: true,
        github: 'https://github.com/JSinc98/Petadoptionassistance.git',
        description: 'Seach dogs and cats only available for adoption via name or breed only.'
    },

    {
        id: 2,
        name: 'Social Application',
        text: 'Social collaboratin wesbite',
        technologies: 'JavaScript, HTML, CSS, Apollo, Mongoose, GraphQL',
        deployed: true,
        github: 'https://github.com/Walsh-Vaz/Social-App',
        description: 'Social collaboration tool that enables users to create edit delete new post, comment on posts'
    }
];

const styles = {
    card : {
        margin: 40,
        background: "#add8e6", // light blue
        padding: 60
    },

    header: {
        minHeight: 50,
        lineHeight: 1.3,
        fontSize: "1.7rem",
        color: "black",
        padding: "0 20px",
    },

    content: {
        background: "#87ceeb", // sky blue
        color: "white",
        flex: 1,
    },

    link: {
        color: "blue",
        flex: 1,
    },
};

function DisplayProjects() {

    return (
    <div style={styles.card}>
        <h1 style={styles.header}> My Projects</h1>
        {projects.map((project) => {
            return (
                <div>
                    <h2>{project.id}: {project.name}</h2>
                    <p style={styles.content}>{project.description}</p>
                    <a href={project.github} style={styles.link}> GitHub link: {project.github}</a>
                </div>
            )
        })}
    </div>
    );
}

export default DisplayProjects;
