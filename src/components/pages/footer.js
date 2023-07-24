import React, {useState} from "react"

const styles = {
    card : {
        margin: 40,
        background: "#add8e6", // light blue
        padding: 60,
    },

    header: {
        minHeight: 50,
        lineHeight: 1.3,
        fontSize: "3rem",
        color: "black",
        padding: "0 20px",
        textAlign: "center",
    },

    content: {
        background: "#87ceeb", // sky blue
        color: "white",
        padding: 20,
        textAlign: "center"
    },

    questionAndEmail: {
        color: "black",
        padding: 20,
    },

    a: {
        color: "blue",
        textAlign: "center",
    }
};

function ContactInfo() {
    const [email, setEmail] = useState("");

    return (
        <div style={styles.card}>
            <h1 style={styles.header}> Contact Me</h1>
            <p style={styles.content}>You can reach me on my email: contactme@testemail.com</p>
            
            <p style={styles.questionAndEmail}>Enter Your email</p>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.textBox}></input>

            <p> Enter Your Questions or Inquiries</p>
            <input type="text"></input> 

            <button> Submit</button>

            <p>Visit my GitHub</p>
            <a href="https://github.com/JackilynTan" style={styles.a}> {"https://github.com/JackilynTan"}</a>
        </div>
    );
}

export default ContactInfo;
