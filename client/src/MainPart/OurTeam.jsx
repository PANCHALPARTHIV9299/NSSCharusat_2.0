import "../components/style.css";
import image1 from "../assets/VstatusImg.jpg";
import image2 from "../assets/cordi4.jpeg";
import image3 from "../assets/Event1.jpg";
// import "./MianPart.css";
import Footer from "../components/Footer";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useRef } from "react";

import i1 from "../assets/Ankur Patel_CSPIT EE.jpg";
import i2 from "../assets/Dr. Martin Parmar_CSPIT-CE.jpg";
import i3 from "../assets/Dr. Hardik B. Pandit_CMPICA.jpg";
import i4 from "../assets/Dr. Poonam Amrutia_IIIM.jpg";
import i5 from "../assets/Dr. Rajesh V. Savalia_ Maths Department_ PDPIAS.jpg";
import i6 from "../assets/Dr. Sagarkumar B. Patel_CSPIT- EC.jpg";
import i7 from "../assets/Dr. Shreya Swami (PT)_ ARIP.jpg";
import i8 from "../assets/Gaurang Patel.jpg";
import i9 from "../assets/Gauravkumar.jpg";
import i10 from "../assets/Hardik Koria_RPCP.jpg";
import i11 from "../assets/hetal passport size photo.jpg";
import i12 from "../assets/Hitesh Makwana_DEPSTAR-IT.png";
import i13 from "../assets/Kashyap Patel - DEPSTAR - CE.jpg";
import i14 from "../assets/Megha Desai_CSPIT_CL.jpg";
import i15 from "../assets/Parth Thakor_BDIPS.jpg";
import i16 from "../assets/Pinal Hansora_CSPIT-CSE.jpg";
import i17 from "../assets/Rajnik Katriya- CSPIT-IT.jpg";
import i18 from "../assets/Satayu Travadi -CSPIT ME.jpg";

import im1 from "../assets/Dhruv EC.png";
import im2 from "../assets/Diya.png";
import im3 from "../assets/AARTI.png";
import im4 from "../assets/JASH.png";
import im5 from "../assets/Heet.jpg";
import im6 from "../assets/Chesta.jpg";
import im7 from "../assets/Utsav.jpg";
import im8 from "../assets/PARV.png";

const testimonials = [
  {
    image: image2,
    text: "I am happy to know that CHARUSAT has a goal set for the mission of social upliftment.",
    name: "Prof. Kishan Patel",
    designation: "NSS Program Coordinator , CHARUSAT",
  },
];

const coordinators = [
  {
    name: "Mr. Dhruv Pupapara",
    role: "CSPIT-EC",
    image: im1,
    email: "23ec113@charusat.edu.in"
  },
  {
    name: "Ms. Diya Thakkar",
    role: "CSPIT-EC",
    image: im2,
    email: "23ec137@charusat.edu.in "
  },
  {
    name: "Ms. Aarti Jain",
    role: "CSPIT-CE",
    image: im3,
    email: "23ce045@charusat.edu.in"
  },
  {
    name: "Mr. Jash Bhungaliya",
    role: "CSPIT-ME",
    image: im4,
    email: "23ME004@charusat.edu.in"
  },
  {
    name: "Mr. Heet Vithalani",
    role: "DEPSTAR-CE",
    image: im5,
    email: "d24dce144@charusat.edu.in"
  },
  {
    name: "Ms. Chesta Ginoya",
    role: "DEPSTAR-CE",
    image: im6,
    email: "23DCE034@charusat.edu.in"
  },
  {
    name: "Mr. Utsav Lodaliya",
    role: "CMPICA",
    image: im7,
    email: "23bsit036@charusat.edu.in"
  },
  {
    name: "Mr. Parv Chittora",
    role: "PDPIAS",
    image: im8,
    email: "23bsc058@charusat.edu.in"
  },
];

// Program Officers data with emails
const programOfficers = [
   {
    name: "Dr. Shreya Swami",
    role: "ARIP",
    image: i7,
    email: "shreyaswami.phy@charusat.ac.in"
  },
  // 2. BDIPS (CIPS)
  {
    name: "Dr. Parth Thakor",
    role: "BDIPS",
    image: i15,
    email: "parththakor.cips@charusat.ac.in"
  },
  // 3. CMPICA
  {
    name: "Dr. Hardik Pandit",
    role: "CMPICA",
    image: i3,
    email: "hardikpandit.mca@charusat.ac.in"
  },
  // 4. CSPIT-AIML
  {
    name: "Prof. Gauravkumar",
    role: "CSPIT-AIML",
    image: i9,
    email: "Gauravkumar.aiml@charusat.ac.in"
  },
  // 5. CSPIT-CE
  {
    name: "Prof. Martin Parmar",
    role: "CSPIT-CE",
    image: i2,
    email: "martinparmar.ce@charusat.ac.in"
  },
  // 6. CSPIT-CL
  {
    name: "Prof. Megha Desai",
    role: "CSPIT-CL",
    image: i14,
    email: "meghadesai.cv@charusat.ac.in"
  },
  // 7. CSPIT-CSE
  {
    name: "Prof. Pinal Hansora",
    role: "CSPIT-CSE",
    image: i16,
    email: "Pinalhansora.cse@charusat.ac.in"
  },
  // 8. CSPIT-EC
  {
    name: "Dr. Sagarkumar Patel",
    role: "CSPIT-EC",
    image: i6,
    email: "sagarpatel.ec@charusat.ac.in"
  },
  // 9. CSPIT-EE
  {
    name: "Prof. Ankur Patel",
    role: "CSPIT-EE",
    image: i1,
    email: "ankurpatel.ee@charusat.ac.in"
  },
  // 10. CSPIT-IT
  {
    name: "Prof. Rajnik Katriya",
    role: "CSPIT-IT",
    image: i17,
    email: "rajnikkatriya.it@charusat.ac.in"
  },
  // 11. CSPIT-ME
  {
    name: "Prof. Satayu Travadi",
    role: "CSPIT-ME",
    image: i18,
    email: "satayutravadi.me@charusat.ac.in"
  },
  // 12. DEPSTAR-CE
  {
    name: "Prof. Kashyap Patel",
    role: "DEPSTAR-CE",
    image: i13,
    email: "kashyappatel.dce@charusat.ac.in"
  },
  // 13. DEPSTAR-CSE
  {
    name: "Prof. Gaurang Patel",
    role: "DEPSTAR-CSE",
    image: i8,
    email: "gaurangpatel.dcs@charusat.ac.in"
  },
  // 14. DEPSTAR-IT
  {
    name: "Prof. Hitesh Makwana",
    role: "DEPSTAR-IT",
    image: i12,
    email: "hiteshmakwana.dit@charusat.ac.in"
  },
  // 15. IIIM
  {
    name: "Dr. Poonam Amrutia",
    role: "IIIM",
    image: i4,
    email: "poonamamrutia.mba@charusat.ac.in"
  },
  {
    name: "Prof. Hetal Shah",
    role: "IIIM",
    image: i11,
    email: "hetalshah.nur@charusat.ac.in"
  },
  // 17. PDPIAS
  {
    name: "Dr. Rajesh Savalia",
    role: "PDPIAS",
    image: i5,
    email: "rajeshsavalia.maths@charusat.ac.in"
  },
  // 18. RPCP
  {
    name: "Prof. Hardik Koria",
    role: "RPCP",
    image: i10,
    email: "hardikkoria.ph@charusat.ac.in"
  }
];

function OurTeam() {
  const sliderRef = useRef(null);

  const scrollAmount = 6 * 120; // Approx width of 6 SCPhoto items

  const Pre = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const Next = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="OurTeam">Our Team</div>

      <div className="Coordinator">
        <div className="AboutUs Pcordi" style={{ marginTop: "5px" }}>
          Program Coordinator
        </div>
      </div>

      <div className="Statistics">
        <div className="flex justify-center items-center bg-gray-100">
          <div
            className="w-full max-w-2xl p-5"
            style={{ width: "100%", borderRadius: "10px", textAlign: "center" }}
          >
            <Swiper>
              {testimonials.map((testimonial, index) => (
                <SwiperSlide
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-32 h-32 rounded-full border-4 border-white shadow-md mb-4 program-coordinator-image"
                    style={{
                      borderRadius: "20px",
                      height: "250px",
                      width: "200px",
                      marginTop: "30px",
                    }}
                  />

                  <h5 className="font-semibold text-gray-900 mt-0">
                    {testimonial.name}
                  </h5>
                  <p
                    className="text-gray-500 text-sm"
                    style={{ fontSize: "15px" }}
                  >
                    {testimonial.designation}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="Coordinators">
        <div className="AboutUs Pcordi" style={{ marginTop: "5px" }}>
          Program Officers
        </div>

        <div className="Sub">
          {programOfficers.map((officer, index) => (
            <div key={index} className="CPhoto">
              <div className="C1">
                <img src={officer.image} alt={officer.name} />
              </div>
              <div className="C2">
                <div className="profile-info-container">
                  <div className="text-info">
                    <p className="p1">{officer.name}</p>
                    <p className="p3">{officer.role}</p>
                  </div>
                  <div className="contact-icon">
                    <a href={`mailto:${officer.email}`} className="email-link" aria-label="Email" target="_blank" rel="noopener noreferrer">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="StudentCoordinator">
        <div className="AboutUs Pcordi" style={{ marginTop: "5px" }}>
          Student Coordinators
        </div>

        <div className="Sub">
          {coordinators.map((coordinator, index) => (
            <div key={index} className="CPhoto">
              <div className="C1">
                <img src={coordinator.image} alt={coordinator.name} />
              </div>
              <div className="C2">
                <div className="profile-info-container">
                  <div className="text-info">
                    <p className="p1">{coordinator.name}</p>
                    <p className="p3">{coordinator.role}</p>
                  </div>
                  <div className="contact-icon">
                    <a href={`mailto:${coordinator.email}`} className="email-link" aria-label="Email" target="_blank" rel="noopener noreferrer">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="f1" style={{ marginTop: "130px", width: "100%" }}>
        <div
          className="AboutUs"
          style={{ flexDirection: "column", height: "80px" }}
        >
          Join NSS, Be the Change!
          <p style={{ fontSize: "10px", fontWeight: "500" }}>
            If you are passionate about making a difference, become a part of
            our NSS family today and contribute to a better, brighter future!
          </p>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default OurTeam;