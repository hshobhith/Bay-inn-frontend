import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import React from 'react';

function FloatingContact() {
  return (
    <div className='floating-contact'>
      <a
        className='floating-btn floating-whatsapp'
        href='https://wa.me/919945302194'
        target='_blank'
        rel='noreferrer'
        aria-label='Chat on WhatsApp'
      >
        <FaWhatsapp />
      </a>
      <a
        className='floating-btn floating-phone'
        href='tel:+918792508322'
        aria-label='Call us'
      >
        <FaPhone />
      </a>
    </div>
  );
}

export default FloatingContact;
