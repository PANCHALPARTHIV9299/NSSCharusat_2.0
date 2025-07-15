import React from 'react';
import './OurTeam.css';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Nevil Dhinoja",
      role: "Project Manager",
      
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      social: {
        Linkdln: "https://www.linkedin.com/in/nevil-dhinoja",
        facebook: "d24ce147@charusat.edu.in",
        github: "#"
        // D24DCE147
      }
    },
    {
      id: 2,
      name: "Partiv Panchal",
      role: "Frontend Developer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      social: {
        Linkdln: " https://www.linkedin.com/in/parthiv-panchal-a66101321",
        facebook: "d24dce138@charusat.edu.in",
        github: "#"
        // D24DCE138
      }
    },
    {
      id: 3,
      name: "Ayushi Kotadiya",
      role: "Frontend Developer",
      
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      social: {
        Linkdln: "https://www.linkedin.com/in/ayushi-kotadiya",
        facebook: "23dit026@charusat.edu.in",
        github: "#"
        // 23DIT026
      }
    },
    {
      id: 4,
      name: "Shubh Patel",
      role: "Backend Developer",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      social: {
        Linkdln: "https://www.linkedin.com/in/shubh-patel-834a6329b/",
        facebook: "d24dce137@charusat.edu.in",
        github: "#"
        // D24DCE137 

      }
    },
    {
      id: 5,
      name: "Dwijesh ",
      role: "]UI/UX Designer",
      
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      social: {
        Linkdln: "https://www.linkedin.com/in/dwijesh-trivedi-a88622239?",
        facebook: "d24dce135@charusat.edu.in",
        github: "#"
        //  D24DCE134

      }
    },
    {
      id: 6,
      name: "Fenil",
      role: "Lead Developer",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      social: {
        Linkdln: "https://www.linkedin.com/in/thumbar-fenil-b6899a250?trk=contact-info",
        facebook: "d24dce149@charusat.edu.in",
        github: "#"
        // D24DCE149
      }
    }
  ];

  return (
    <div className="our-team-container">
      <div className="team-header">
        <h1 className="team-title">Our Executive Team</h1>
        <p className="team-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo 
        </p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <div className="member-image-container">
              <img 
                src={member.image} 
                alt={member.name}
                className="member-image"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <div className="social-links">
              <a href={member.social.Linkdln} className="social-link" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14C2.239 0 1 1.239 1 2.771v18.457C1 22.761 2.239 24 4 24h14c1.761 0 3-1.239 3-2.771V2.771C22 1.239 20.761 0 19 0zM7.5 20H4V9h3.5v11zM5.75 7.5a2.01 2.01 0 1 1 0-4.02 2.01 2.01 0 0 1 0 4.02zM20 20h-3.5v-5.3c0-1.26-.02-2.89-1.76-2.89-1.76 0-2.03 1.38-2.03 2.8V20H9.25V9H12.6v1.5h.05c.47-.89 1.62-1.83 3.34-1.83 3.57 0 4.23 2.35 4.23 5.4V20z"/>
                </svg>
              </a>

                  <a href={`mailto:${member.social.facebook}`} className="social-link" aria-label="Email">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z"/>
                  </svg>
                </a>
                <a href={member.social.github} className="social-link" aria-label="GitHub">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;