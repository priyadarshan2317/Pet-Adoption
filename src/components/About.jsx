// About.js

import React from 'react';
import './About.css'; // Import the CSS file for styling

function About() {
  return (
    <div className="about-page">
      <header>
        <h1>About Adopt Spot</h1>
      </header>
      <main>
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Established with a heartfelt vision, Adopt Spot was born from a collective love for animals. We recognized the need for a platform that not only simplifies the adoption process but also celebrates the unique connection between pets and humans.
          </p>
        </section>
        
        <section className="highlights-section">
          <h2>What Sets Us Apart</h2>
          <ul>
            <li>
              <h3>Compassionate Approach</h3>
              <p>We prioritize the well-being and happiness of every animal in our care. Our dedicated team ensures that each adoption journey is filled with care and empathy.</p>
            </li>
            <li>
              <h3>Diverse Pet Profiles</h3>
              <p>From playful pups to serene senior cats, we embrace the diversity of our furry friends. Our platform showcases a variety of animals awaiting their perfect match.</p>
            </li>
            <li>
              <h3>Supportive Community</h3>
              <p>Adopt Spot isn't just a platform; it's a community of animal lovers, volunteers, and adopters. We offer ongoing support and resources to ensure a seamless transition for both pets and families.</p>
            </li>
          </ul>
        </section>

        {/* Other sections such as commitment, call-to-action, etc. */}
        
      </main>
      <footer>
        <p>&copy; 2023 Adopt Spot. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default About;
