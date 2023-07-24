import React from 'react';

const styles = {
  ul : {
      display: "flex",
      flexDirection: "row",
      float: "right",
      padding: "3px, 10px",
  },

  li: {
     display: "block",
     fontSize: "1.5rem",
     marginLeft: 30,
     marginRight: 40,
     color: "black",
  },

  a: {
    color: "blue",
  },
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul style = {styles.ul}>
      <li style={styles.li}>
        <a
          style={styles.a}
          href="#aboutMe"
          onClick={() => handlePageChange('aboutMe')}
          className={currentPage === 'aboutMe' ? 'nav-link active' : 'nav-link'}
        >
          Jackilyn Tan
        </a>
      </li>
      <li style={styles.li}>
        <a
          style={styles.a}
          href="#aboutMe"
          onClick={() => handlePageChange('aboutMe')}
          className={currentPage === 'aboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li style={styles.li}>
        <a
          style={styles.a}
          href="#projects"
          onClick={() => handlePageChange('displayProjects')}
          className={currentPage === 'displayProjects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li style={styles.li}>
        <a
          style={styles.a}
          href="#footer"
          onClick={() => handlePageChange('contactInfo')}
          className={currentPage === 'contactInfo' ? 'nav-link active' : 'nav-link'}
        >
          Contact Info
        </a>
      </li>

      <li style={styles.li}>
        <a
          style={styles.a}
          href="https://www.icloud.com/iclouddrive/065X3-ronXXO22HT7ryBfRrBw#Jackilyn_Tan_Resume"
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
