import React, { useEffect, useState, useRef } from "react";
import Modal from "react-modal";
import { FaTimes } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

Modal.setAppElement('#root');

const CareerModal = ({ isOpen, onRequestClose }) => {
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_contactNumber: '',
        user_address: '',
        user_state: '',
        user_city: '',
        user_pincode: '',
        cv: null,
    });

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle file input change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prevState => ({
            ...prevState,
            cv: file
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm('service_vnpsxlp', 'template_xape1mx', form.current, 'PTAShub-ODpBrLKv5')
          .then(
            () => {
              console.log('SUCCESS!');
              alert("Submitted Successfully!");
            },
            (error) => {
              console.log('FAILED...', error.text);
              alert("Error Sending Message!");
            },
          );
    };

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap';
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            shouldCloseOnOverlayClick={false}
            shouldCloseOnEsc={false}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '20px',
                    borderRadius: '15px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
                    backgroundColor: 'white',
                    maxWidth: '600px',
                    width: '90%',
                    maxHeight: '60vh',
                    overflowY: 'auto',
                    fontFamily: '"Open Sans", sans-serif',
                },
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                },
            }}
        >
            <button
                onClick={onRequestClose}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'transparent',
                    border: 'none',
                    fontSize: '20px',
                    cursor: 'pointer',
                }}
            >
                <FaTimes style={{ color: '#FF6347' }} />
            </button>

            <p style={{ textAlign: 'center', color: '#94664b', marginBottom: '20px' }}>
                We are excited to invite you to explore a rewarding career with us at CPS (P) LTD ! Join a team where your skills are valued, and your growth is supported. Discover your potential and make an impact with us.
                Apply now to be part of our journey.
            </p>
            <h1>JOIN US</h1>
            <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div className="row">
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="user_name"
                            className="form-control"
                            placeholder="Name *"
                            required
                            value={formData.user_name}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="email"
                            name="user_email"
                            className="form-control"
                            placeholder="Email *"
                            required
                            value={formData.user_email}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="user_contactNumber"
                            className="form-control"
                            placeholder="Contact Number *"
                            required
                            value={formData.user_contactNumber}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="user_address"
                            className="form-control"
                            placeholder="Address *"
                            required
                            value={formData.user_address}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="user_state"
                            className="form-control"
                            placeholder="State *"
                            required
                            value={formData.user_state}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="user_city"
                            className="form-control"
                            placeholder="City *"
                            required
                            value={formData.user_city}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="user_pincode"
                            className="form-control"
                            placeholder="Pincode *"
                            required
                            value={formData.user_pincode}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                    {/* <div className="col-md-6">
                        <input
                            type="file"
                            name="cv"
                            className="form-control"
                            onChange={handleFileChange}
                            style={inputStyle}
                        />
                    </div> */}
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <button
                        type="submit"
                        className="btn btn-custom btn-lg"
                        style={{
                            padding: '10px 20px',
                            borderRadius: '10px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '16px',
                        }}
                    >
                        Send
                    </button>
                </div>
            </form>
        </Modal>
    );
};

// Style for input fields
const inputStyle = {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #FFF2C1',
    fontSize: '12px',
    color: '#94664b',
};

export default CareerModal;
