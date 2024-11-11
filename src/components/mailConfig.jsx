// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_vnpsxlp', 'template_mzs8lqp', form.current, {
//         publicKey: 'PTAShub-ODpBrLKv5',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//           alert("Submitted Successfully!");
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   return (
//     <form
//       ref={form}
//       onSubmit={sendEmail}
//       style={{
//         maxWidth: '500px',
//         margin: '0 auto',
//         paddingTop: '80px',
//         borderRadius: '8px',
//         boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
//         backgroundColor: '#f9f9f9',
//       }}
//     >
//       <label style={{ fontWeight: 'bold', marginTop: '10px', color: '#333' }}>
//         Name
//       </label>
//       <input
//         type="text"
//         name="user_name"
//         // style={{ width: '100%', padding: '10px', marginTop: '5px' }}
//       />
//       <label style={{ fontWeight: 'bold', marginTop: '10px', color: '#333' }}>
//         Email
//       </label>
//       <input
//         type="email"
//         name="user_email"
//         style={{ width: '100%', padding: '10px', marginTop: '5px' }}
//       />
//       <label style={{ fontWeight: 'bold', marginTop: '10px', color: '#333' }}>
//         State
//       </label>
//       <input
//         type="text"
//         name="user_state"
//         style={{ width: '100%', padding: '10px', marginTop: '5px' }}
//       />
//       <label style={{ fontWeight: 'bold', marginTop: '10px', color: '#333' }}>
//         Message
//       </label>
//       <textarea
//         name="message"
//         style={{ width: '100%', padding: '10px', marginTop: '5px', height: '100px' }}
//       />
//       <input
//         type="submit"
//         value="Send"
//         style={{
//           marginTop: '15px',
//           padding: '10px 20px',
//           backgroundColor: '#4CAF50',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '4px',
//           cursor: 'pointer',
//         }}
//       />
//     </form>
//   );
// };

import React from 'react'

const mailConfig = () => {
  return (
    <div>
      
    </div>
  )
}

export default mailConfig
