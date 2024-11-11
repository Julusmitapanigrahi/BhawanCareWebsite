import React, { useState } from "react";
import AnimatedComponent from "./animation";
import CareerModal from "./careerModal";


export const Career = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
    
    return (
        <div className="career-container">
            <img
                src="img/career.jpg"
                alt="Career"
                className="career-image"
            />
            <h1>Join Our Team</h1>
            <p>We are looking for talented individuals to join our innovative team and make a difference.</p>

            <button className="btn btn-custom btn-lg" onClick={openModal}>
                Learn More
            </button>
            <CareerModal isOpen={isModalOpen} onRequestClose={closeModal} />
        </div>
    );
};
