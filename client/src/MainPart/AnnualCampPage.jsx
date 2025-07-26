import "../components/style.css";
import "./MianPart.css";
import React, { useRef, useState } from "react";
import Footer from "../components/Footer";

// === Image Imports ===
import image1 from "../assets/Annnual Camp/i_24_25_1.jpg";
import image2 from "../assets/Annnual Camp/i_24_25_2.jpg";
import image3 from "../assets/Annnual Camp/i_24_25_3.jpg";
import image4 from "../assets/Annnual Camp/i_24_25_4.jpg";
import image5 from "../assets/Annnual Camp/i_24_25_5.jpg";

import img1 from "../assets/Annnual Camp/i_23_24_1.jpeg";
import img2 from "../assets/Annnual Camp/i_23_24_2.jpeg";
import img3 from "../assets/Annnual Camp/i_23_24_3.jpeg";
import img4 from "../assets/Annnual Camp/i_23_24_4.jpeg";
import img5 from "../assets/Annnual Camp/i_23_24_5.jpeg";
import img6 from "../assets/Annnual Camp/i_23_24_6.jpeg";
import img7 from "../assets/Annnual Camp/i_23_24_7.jpeg";
import img8 from "../assets/Annnual Camp/i_23_24_8.jpeg";
import img9 from "../assets/Annnual Camp/i_23_24_9.jpeg";
import img10 from "../assets/Annnual Camp/i_23_24_10.jpeg";
import img11 from "../assets/Annnual Camp/i_23_24_11.jpeg";
import img12 from "../assets/Annnual Camp/i_23_24_12.jpeg";

import i1 from "../assets/Annnual Camp/img_24_25_1.jpeg";
import i2 from "../assets/Annnual Camp/img_24_25_2.jpeg";
import i3 from "../assets/Annnual Camp/img_24_25_3.jpeg";
import i4 from "../assets/Annnual Camp/img_24_25_4.jpeg";
import i5 from "../assets/Annnual Camp/img_24_25_5.jpeg";
import i6 from "../assets/Annnual Camp/img_24_25_6.jpeg";
import i7 from "../assets/Annnual Camp/img_24_25_7.jpeg";
import i8 from "../assets/Annnual Camp/img_24_25_8.jpeg";
import i9 from "../assets/Annnual Camp/img_24_25_9.jpeg";
import i10 from "../assets/Annnual Camp/img_24_25_10.jpeg";

// === Image Arrays ===
const coordinators1 = [image1, image2, image3, image4, image5];
const coordinators2 = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
const coordinators3 = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10];

function AnnualCampPage() {
  // Refs for scrolling
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const sliderRef3 = useRef(null);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const scrollLeft = (ref) => {
    if (ref.current) ref.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = (ref) => {
    if (ref.current) ref.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  // Image click handler
  const openModal = (image) => {
    setSelectedImages([image]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImages([]);
  };

  const renderCampSection = (title, images, ref) => (
    <div className="Acamp">
      <div className="yearheading" style={{ marginBottom: "0px" }}>
        {title}
      </div>
      <div
        ref={ref}
        className="CSub flex overflow-x-auto scroll-smooth scrollbar-hide gap-4 p-2"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="CCPhoto bg-gray-200 w-28 h-28 rounded-md flex justify-center items-center cursor-pointer"
            onClick={() => openModal(img)}
          >
            <img
              src={img}
              alt={`Coordinator ${index + 1}`}
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
        ))}
      </div>
      <nav aria-label="Page navigation example" className="mt-0 flex justify-center AnnualNav">
        <ul className="pagination flex gap-2">
          <li className="page-item">
            <button
              className="page-link bg-gray-200 p-2 rounded-md"
              aria-label="Previous"
              onClick={() => scrollLeft(ref)}
            >
              &laquo;
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link bg-gray-200 p-2 rounded-md"
              aria-label="Next"
              onClick={() => scrollRight(ref)}
            >
              &raquo;
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );

  return (
    <>
      <div className="AboutUs">Annual Camp</div>

      {renderCampSection("A.Y 2025-24 : Annual Camp", coordinators3, sliderRef1)}
      {renderCampSection("A.Y 2024-23 : Annual Camp", coordinators2, sliderRef2)}
      {renderCampSection("A.Y 2024-23 : Polo Forest", coordinators1, sliderRef3)}

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className={selectedImages.length > 1 ? "modal-grid" : "modal-single"}>
              {selectedImages.map((img, index) => (
                <img key={index} src={img} alt="Full View" className="modal-image" />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="f1 AnnualFooterStart">
        <div className="AboutUs">
          Join NSS, Be the Change!
          <p>
            If you are passionate about making a difference, become a part of
            our NSS family today and contribute to a better, brighter future!
          </p>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default AnnualCampPage;