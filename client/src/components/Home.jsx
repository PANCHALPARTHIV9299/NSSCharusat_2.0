import React, { useEffect, useState } from "react";
import image2 from "../assets/cordi4.jpeg";
import image3 from "../assets/Pcordi.jpg";
import image4 from "../assets/BlanckProfile.png";

import "../components/Mission.css";
import "../components/BackgroundSlideshow.css";

import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/bg4.jpg";
import bg5 from "../assets/bg5.jpg";

const images = [bg1, bg2, bg3, bg4, bg5];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="homepage-container">
        <div
          className="background-slideshow"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        ></div>
        <div className="overlay"></div>
        <div className="content">
          <h1>Welcome to <span className="highlight">CHARUSAT NSS</span></h1>
          <p>The National Service Scheme (NSS) is a Central Sector Scheme of Government of India, Ministry of Youth Affairs & Sports. It provides an opportunity to students to take part in various community service activities & programmes.</p>
        </div>
      </div>
      
      <div className="mission-page">
        <div className="mission-container">
          <div className="section-title">
            <h2>Mission</h2>
          </div>
          <div className="mission-content">
            <p>
              To Develop socially responsible, service-oriented individuals who
              contribute to nation-building through leadership, ethics,
              service, and community Engagement.
            </p>
          </div>
        </div>

        <div className="vision-container">
          <div className="section-title">
            <h2>Vision</h2>
          </div>
          <div className="vision-content">
            <p>
              To inspire selfless service, leadership and teamwork through
              Collaboration and community development, Upholding the NSS
              motto, "Not Me, But You."
            </p>
          </div>
        </div>

        <header className="message-desk">
          <h2>Message from Desk</h2>
        </header>

        <div className="messages-container">
          <div className="message-card">
            <div className="section-title">
              <h3>Provost</h3>
            </div>
            <div className="message-content">
              <div className="message-text">
                <p>
                  Education is not just about Knowledge, it's about responsibility.
                  The NSS unit at CHARUSAT fosters a culture of service,
                  leadership, and community Engagement, shaping our students into
                  responsible citizens. We take immense pride in the efforts of
                  our NSS volunteers, Who selflessly work towards creating a better
                  society.
                </p>
              </div>
              <div className="message-profile">
                <img src={image4} alt="Provost" className="profile-image" />
                <h4 className="profile-name">........</h4>
              </div>
            </div>
          </div>

          <div className="message-card">
            <div className="section-title">
              <h3>Registrar</h3>
            </div>
            <div className="message-content">
              <div className="message-text">
                <p>
                  The NSS Unit is an integral part of CHARUSAT's commitment to
                  holistic education. Through this platform, our students learn the
                  true essence of service, empathy, and leadership. I encourage all
                  volunteers to continue their efforts in making a positive
                  impact.
                </p>
              </div>
              <div className="message-profile">
                <img src={image3} alt="Registrar" className="profile-image" />
                <h4 className="profile-name">Dr Atul Patel</h4>
              </div>
            </div>
          </div>

          <div className="message-card">
            <div className="section-title">
              <h3>Program Coordinator</h3>
            </div>
            <div className="message-content">
              <div className="message-text">
                <p>
                  At CHARUSAT, the National Service Scheme (NSS) Cell plays a
                  pivotal role in shaping responsible, active, and socially aware
                  citizens. It encourages students to engage in community
                  service, fostering the values of selflessness, compassion, and
                  leadership.
                </p>
              </div>
              <div className="message-profile">
                <img src={image2} alt="Program Coordinator" className="profile-image" />
                <h4 className="profile-name">Kishan Patel</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="duties-container">
          <h2 className="section-title">Duties of Volunteer</h2>
          <div className="duties-content">
            <ul>
              <li>To serve the community and uphold the values of NSS.</li>
              <li>To participate actively in community development programs.</li>
              <li>To foster leadership, teamwork, and problem-solving skills.</li>
              <li>To uphold ethical and moral responsibilities in all activities.</li>
              <li>To commit to social awareness and sustainable development.</li>
              <li>The NSS Unit at CHARUSAT was started in the year 2014. Since then, it has been a vibrant and active unit.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;