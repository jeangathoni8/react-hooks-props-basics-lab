import React from "react";
import Links from "./Links"; // Ensure the Links component is imported

function About({ bio, links }) { // Accept bio and links as props
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>} // Conditional rendering of the bio
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;



