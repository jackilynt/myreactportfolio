import React from "react";

const styles = {
    card : {
        margin: 40,
        background: "#add8e6", // light blue
        padding: 60
    },

    header: {
        background: "#0000ff", // blue
        minHeight: 50,
        lineHeight: 1.3,
        fontSize: "1.2rem",
        color: "white",
        padding: "0 20px",
    },

    content: {
        background: "#87ceeb", // sky blue
        color: "white",
        padding: 20,
    },
};

function AboutMe() {

    return (
        <div style={styles.card}> 
            <h1 style={styles.header}> About Me</h1>
            <p style={styles.content}>
                Hello everyone! I am a Senior Consultant and Project Manager with an extensive background in various facets of project development. I recently graduated from the Carleton University Coding Bootcamp, where I deepened my passion for technology and gained valuable experience in a hands-on, fast-paced environment. 

                What excites me most about this industry is the limitless potential it holds. Specifically, I am deeply interested in machine learning, data science, and artificial intelligence. These areas, I believe, are the future of technology, and I am eager to be part of that future. 

                As I continue to explore these areas and apply what I've learned in my career, I look forward to contributing to meaningful projects and shaping the future of technology.
            </p>
        </div>
    );
}

export default AboutMe;
